import { useContext } from 'react';
import { Link } from 'react-router';
import { BellIcon, PlusIcon, Wallet } from 'lucide-react';

import { GlobalContext } from '@/contexts/GlobalContext';

const NavItems = () => {
  const { setAddPublicationModalOpen } = useContext(GlobalContext);

  return (
    <nav className='flex gap-5 items-center'>
      <ul className='flex gap-2 items-center'>
          <button className='p-2.5 rounded-full transition-all duration-300 ease-in-out hover:bg-zinc-200/50'>
            <Link to='/donate'>
              <Wallet className='w-6 h-6' />
            </Link>
          </button>
          <button className='p-2.5 rounded-full transition-all duration-300 ease-in-out hover:bg-zinc-200/50'>
            <BellIcon className='w-6 h-6' />
          </button>
      </ul>

        <div className='flex flex-col gap-2 items-center'>
          <button
            className='flex items-center gap-2 text-base py-1.5 px-3 rounded-md bg-orange-500
            text-white transition-all duration-300 ease-in-out hover:bg-orange-600'
            onClick={() => setAddPublicationModalOpen(true)}
          >
            <PlusIcon className='w-5 h-5' />
            <span>Nova postagem</span>
          </button>
        </div>
    </nav>
  )
}

export default NavItems;
