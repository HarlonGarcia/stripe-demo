import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { Modal, ModalProps } from '../..'
import { createSuggestionSchema, CreateSuggestionSchema } from './validation';
import { useEffect } from 'react';
import MoneyInput from '@/components/inputs/money-input';
import TextArea from '@/components/inputs/text-area';
import { useMutation } from '@tanstack/react-query';
import { queryClient } from '@/services/queryClient';
import { useParams } from 'react-router';
import { createSuggestion, ICreateSuggestionDto } from '@/services/requests/suggestions';

type SuggestionModalProps = ModalProps;

export const SuggestionModal = ({ onConfirm, onClose, ...rest }: SuggestionModalProps) => {
  const { id } = useParams();

  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm<CreateSuggestionSchema>({
    resolver: zodResolver(createSuggestionSchema),
    defaultValues: {
      suggestedPrice: '0',
      comment: '',
    }
  });

  const closeAndResetForm = () => {
    onClose();
    reset();
  }

  const { mutate } = useMutation({
    mutationFn: createSuggestion,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['publications', id],
      });
    },
    onError: closeAndResetForm,
  });

  const onSubmit = async (data: ICreateSuggestionDto) => {
    const payload = {
      ...data,
      publication: id,
    }

    mutate(payload);
    onConfirm();
  };

  useEffect(function registerFields() {
    register('comment');
    register('suggestedPrice');
  }, [register]);

  return (
    <Modal
      {...rest}
      onClose={closeAndResetForm}
      onConfirm={handleSubmit(onSubmit)}
      title='Adicionar sugestão'
      okButtonText='Adicionar'
      cancelButtonText='Cancelar'
    >
      <div className='mt-4 py-2 flex flex-col gap-4'>
        <Controller
          name='comment'
          control={control}
          render={({ field }) => (
            <TextArea
              label='Comentário'
              placeholder='Insira um comentário'
              error={errors.comment?.message}
              {...field}
            />
          )}
        />

        <Controller
          name='suggestedPrice'
          control={control}
          render={({ field: { value, onChange } }) => (
            <MoneyInput
              label='Preço sugerido'
              value={String(value)}
              onChange={onChange}
              error={errors.suggestedPrice?.message}
            />
          )}
        />
      </div>
    </Modal>
  )
}
