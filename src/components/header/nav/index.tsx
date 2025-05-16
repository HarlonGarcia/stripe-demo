/*
import { HeartHandshake } from 'lucide-react';
import { useContext } from 'react';
import { Link } from 'react-router';
import { GlobalContext } from '../../../contexts/GlobalContext';
*/
import Button from "../../button";
import {PlusIcon} from "lucide-react";

const NavItems = () => {
  // const { setIsDonateModalOpen } = useContext(GlobalContext);

  return (
    <nav>
      <ul className='flex gap-5 items-center'>
        <li className=''>
          <Button bgColor="bg-orange-500" >
            <PlusIcon/>
            Nova postagem
          </Button>
        </li>

        <li className=''>
          <Button bgColor="transparent" border="border-1 border-gray-300" >
            Entrar
          </Button>
        </li>

      </ul>
    </nav>
  )
}

export default NavItems;
