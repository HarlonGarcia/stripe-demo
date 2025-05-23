import { useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';
import TextArea from '@/components/inputs/text-area';
import { useMutation } from '@tanstack/react-query';
import { queryClient } from '@/services/queryClient';
import TextInput from '@/components/inputs/text-input';

import { createPublicationSchema, CreatePublicationSchema } from './validation';
import { Modal, ModalProps } from '../..'
import { createPublication, ICreatePublicationDto } from '@/services/requests/publications';

type PublicationModalProps = ModalProps;

export const PublicationModal = ({ onConfirm, onClose, ...rest }: PublicationModalProps) => {
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm<CreatePublicationSchema>({
    resolver: zodResolver(createPublicationSchema),
  });

  const closeAndResetForm = () => {
    onClose();
    reset();
  }

  const { mutate } = useMutation({
    mutationFn: createPublication,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['publications'],
      });
    },
    onError: closeAndResetForm,
  });

  const onSubmit = async (data: ICreatePublicationDto) => {
    mutate(data);
    onConfirm();
  };

  useEffect(function registerFields() {
    register('title');
    register('description');
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
          name='description'
          control={control}
          render={({ field }) => (
            <TextArea
              label='Descrição'
              placeholder='Insira uma descrição'
              error={errors.description?.message}
              {...field}
            />
          )}
        />

        <Controller
          name='title'
          control={control}
          render={({ field: { value, onChange } }) => (
            <TextInput
              label='Título'
              value={value}
              onChange={onChange}
              error={errors.title?.message}
            />
          )}
        />
      </div>
    </Modal>
  )
}
