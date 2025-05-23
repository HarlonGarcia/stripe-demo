import Wrapper from '@/components/wrapper';

import Card from './partials/card';
import { useQuery } from '@tanstack/react-query';
import { getPublications } from '@/services/requests/publications';

export default function Home() {
  const { data: publications = [] } = useQuery<IPublication[]>({
    queryKey: ['publications'],
    queryFn: getPublications,
  });

  return (
    <Wrapper>
      <main className='w-[90%] mx-auto'>
        <h1 className="text-zinc-800 text-2xl font-bold mb-8">
          Projetos Freelancer
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {publications.map((publication) => (
            <Card key={publication.id} publication={publication} />
          ))}
        </div>
      </main>
    </Wrapper>
  )
}
