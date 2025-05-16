/*
import { HeartHandshake } from 'lucide-react';
import { useContext } from 'react';
import { Link } from 'react-router';
import { GlobalContext } from '../../../contexts/GlobalContext';
*/
import Button from "../../button";
import {BellIcon, PlusIcon, Wallet} from "lucide-react";

const NavItems = () => {
  // const { setIsDonateModalOpen } = useContext(GlobalContext);

  return (
    <nav>
      <ul className='flex gap-5 items-center'>
        <li className=''>
          <Button title="Faça uma doação" bgColor="transparent" color="text-orange-500">
            <a href="" target="_blank">
              <Wallet/>
            </a>
          </Button>
        </li>

        <li className=''>
          <Button title="Notificações" bgColor="transparent" color="text-orange-500">
            <BellIcon/>
          </Button>
        </li>

        <div className="flex flex-col gap-2 items-center">
          {/*<div className="flex gap-2 justify-between">*/}
          {/*  <li className=''>*/}
          {/*    <Button title="Entrar na sua conta" bgColor="transparent" border="border-2 border-orange-500">*/}
          {/*      Criar conta*/}
          {/*    </Button>*/}
          {/*  </li>*/}

          {/*  <li className=''>*/}
          {/*    <Button title="Entrar na sua conta" bgColor="transparent" border="border-2 border-gray-300">*/}
          {/*      Entrar*/}
          {/*    </Button>*/}
          {/*  </li>*/}
          {/*</div>*/}

          <li className=''>
            <Button title="Criar uma nova postagem" bgColor="bg-orange-500" color="text-white">
              <PlusIcon/>
              Nova postagem
            </Button>
          </li>
        </div>
      </ul>
    </nav>
  )
}

export default NavItems;
