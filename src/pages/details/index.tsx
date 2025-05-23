import { useContext, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router';
import dayjs from 'dayjs';
import { ArrowLeft, MessageCirclePlus } from 'lucide-react';
import { useQuery } from '@tanstack/react-query';

import Wrapper from '@/components/wrapper';
import { DATE_FORMAT } from '@/utils/constants';

import Picture from './partials/picture';
import { Card } from './partials/card';
import { GlobalContext } from '@/contexts/GlobalContext';
import { SuggestionModal } from '@/components/modal/partials/modal-suggestion';
import { getPublication } from '@/services/requests/publications';
import SpinnerWrapper from '@/components/spinner';

export default function Details() {
  const { id } = useParams();
  const { isAddPostModalOpen, setAddPostModalOpen } = useContext(GlobalContext);
  const navigate = useNavigate();
  
  const {
    data: publication = {} as IPublication,
    isFetching,
  } = useQuery<IPublication>({
    enabled: !!id,
    queryKey: ['publications', id],
    queryFn: () => getPublication(id),
  });

  const formatDate = (date: Date) => dayjs(date).format(DATE_FORMAT);

  useEffect(function handlePublicationNotFound() {
    if (!publication && !isFetching) {
      navigate('/not-found');
    }
  }, [publication, isFetching, navigate]);

  if (!publication) {
    return null;
  }
  return (
    <Wrapper>
      <SpinnerWrapper loading={isFetching} >
        <main className='w-3/5 mx-auto  flex flex-col gap-4'>
          <div className='flex items-center gap-4'>
            <Link to='/' className='group flex items-center gap-1 py-1 pl-1 pr-2 text-orange-500 rounded-full transition-all duration-500 ease-in-out hover:bg-orange-500 hover:text-white hover:-translate-x-1'>
              <ArrowLeft className='h-5' />
              <span className='max-w-0 opacity-0 -translate-y-full text-white text-sm font-semibold transition-all duration-500 ease-in-out group-hover:max-w-xs group-hover:opacity-100 group-hover:translate-y-0'>
                Voltar
              </span>
            </Link>
            <small className='w-full text-base text-orange-500 font-semibold transition-all duration-500 ease-in-out -translate-x-4 group-hover:translate-x-0'>
              Música, Tecnologia
            </small>
          </div>

          <section
            className='w-full h-fit mx-auto flex flex-col gap-8'
          >
            <h2 className='text-7xl pb-2 animate-text bg-gradient-to-r from-zinc-900 via-zinc-500 to-zinc-900 bg-clip-text text-transparent font-black'>
              {publication.title}
            </h2>

            <div className='flex flex-col gap-4'>
              <div className='flex justify-between items-center'>
                <div className='flex items-start gap-2'>
                  <Picture/>

                  <div className='flex flex-col'>
                    <div className='flex items-center gap-1 mb-0.5'>
                      <strong className='text-xl text-zinc-800'>
                        {publication.user?.fullName}
                      </strong>
                      <span className='text-xs rounded-lg py-1 px-2 text-white bg-indigo-600'>Autor</span>
                    </div>
                    <span className='text-sm text-gray-500 hover:underline cursor-pointer'>
                      {publication.user?.email}
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => setAddPostModalOpen(true)}
                  className='flex items-center gap-2 py-1.5 px-3 text-sm rounded-md text-white bg-orange-500 cursor-pointer'
                >
                  <span>Estou interessado</span>
                  <MessageCirclePlus className='h-4 w-4' />
                </button>
              </div>

              <p className='text-zinc-700'>
                {publication.description}
              </p>

              <span className='text-zinc-400'>
                {formatDate(publication.user?.createdAt)}
              </span>
            </div>
          </section>

          <div className='border-b-1 border-gray-300 my-4' />

          <section className='w-full h-fit mx-auto flex flex-col gap-6'>
            <div className='flex items-center gap-2'>
              <div className='flex justify-center items-center w-6 h-6 rounded-md text-sm text-white font-bold bg-orange-500'>
                <span>{publication.suggestions?.length}</span>
              </div>
              <h3 className='text-lg font-semibold'>Sugestões recebidas:</h3>
            </div>

            <ul className='flex flex-col gap-6'>
              {publication.suggestions?.map((suggestion) => (
                <Card key={suggestion.comment} suggestion={suggestion} />
              ))}
            </ul>
          </section>
        </main>

        <SuggestionModal
          title='Adicionar sugestão'
          open={isAddPostModalOpen}
          okButtonText='Adicionar'
          cancelButtonText='Cancelar'
          onClose={() => setAddPostModalOpen(false)}
          onConfirm={() => setAddPostModalOpen(false)}
        />
      </SpinnerWrapper>
    </Wrapper>
  )
};
