import { HeartHandshake } from 'lucide-react';
import { useContext } from 'react';
import { Link } from 'react-router';
import { GlobalContext } from '../../../contexts/GlobalContext';

const NavItems = () => {
  const { setIsDonateModalOpen } = useContext(GlobalContext);

  return (
    <nav>
      <ul className='flex gap-5 items-center'>
        <li className='text-indigo-300 transition-all duration-300 ease-in-out hover:text-indigo-500'>
          <Link to='donations'>Ver doações</Link>
        </li>
        <li className='text-indigo-950'>
          <button
            onClick={() => setIsDonateModalOpen(true)}
            className='flex items-center justify-center gap-1 py-1 px-2 rounded-sm 
          bg-pink-300 text-sm font-semibold transition-all duration-300 ease-in-out hover:bg-pink-400'
          >
            <span>Donate</span>
            <HeartHandshake
              className='fill-purple-400'
              size={16}
            />
          </button>
        </li>
      </ul>
    </nav>
  )
}

export default NavItems;
