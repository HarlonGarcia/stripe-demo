
import { useContext } from 'react';
import { PublicationModal } from '@/components/modal/partials/modal-publication';
import { GlobalContext } from '@/contexts/GlobalContext';

import NavItems from './nav';
import AppLogo from "../logo";

const Header = () => {
  const { isAddPublicationModalOpen, setAddPublicationModalOpen } = useContext(GlobalContext);

  return (
    <>
      <div
        className='fixed flex items-center justify-between w-[90%] left-[5%] top-0 pt-6 p-4
        z-10 bg-gray-50 border-b border-gray-200'
      >
        <AppLogo />
        <NavItems />
      </div>
      <PublicationModal
        title='Nova postagem'
        okButtonText='Criar'
        cancelButtonText='Cancelar'
        open={isAddPublicationModalOpen}
        onClose={() => setAddPublicationModalOpen(false)}
        onConfirm={() => setAddPublicationModalOpen(false)}
      />
    </>
  )
}

export default Header;
