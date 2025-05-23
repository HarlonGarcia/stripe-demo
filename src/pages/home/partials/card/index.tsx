import { Link, useNavigate } from 'react-router';

type CardProps = {
  publication: IPublication;
}

const Card = ({ publication }: CardProps) => {
  const { title, description } = publication;

  const navigate = useNavigate();

  return (
    <div
      className='flex flex-col h-full p-5 bg-red-300/5 rounded-lg shadow-md border border-zinc-800/5 transition-all duration-300 ease-in-out hover:shadow-lg'
    >
      <div className='flex flex-col items-start justify-between gap-1 mb-4 md:mb-2 md:flex-row md:items-center'>
        <h2 className='font-bold truncate'>{title}</h2>
        <span className='text-sm font-bold text-orange-800 whitespace-nowrap'>
          {publication.suggestions.length} comentários
        </span>
      </div>
      <div className='mb-8'>
        <p className='text-sm line-clamp-3'>{description}</p>
      </div>
      <div className='flex flex-wrap mt-auto gap-2'>
        <button
          className='text-sm py-1 px-3 rounded-full transition-all duration-300 ease-in-out bg-orange-500 text-white hover:bg-orange-600'
        >
          <Link to={`/details/${publication.id}`}>
            Ver detalhes  
          </Link>
        </button>

        <button
          className='group relative text-sm py-1 px-3 rounded-full transition-all duration-300 ease-in-out border-zinc-800 border-1 z-[1] overflow-hidden hover:border-transparent
          before:content=[""] before:absolute before:top-full before:left-0 before:w-full before:h-full before:bg-zinc-800 before:duration-500 before:z-[2] hover:before:top-0'
          onClick={() => navigate(`/contact/${publication.user.id}`)}
        >
          <span className='relative duration-500 text-zinc-800 z-[3] group-hover:text-white'>
            Entrar em contato
          </span>
        </button>
      </div>
    </div>
  );
}

export default Card;
