import { useContext } from 'react';
import Modal from '../../components/modal';
import Wrapper from '../../components/wrapper';
import Donations from './partials/donations';
import { GlobalContext } from '../../contexts/GlobalContext';
import { ToastContainer } from 'react-toastify';

const Home = () => {
  const { isDonateModalOpen, setIsDonateModalOpen } = useContext(GlobalContext);

  return (
    <Wrapper>
      <div className='w-[90%] mx-auto'>
        <h1 className='text-2xl text-indigo-200 mb-5'>Ultimas doações</h1>
        <Donations />
      </div>
      <Modal
        isOpen={isDonateModalOpen}
        onClose={() => setIsDonateModalOpen(false)}
        title='Preencha os dados para a doação'
      />
      <ToastContainer />
    </Wrapper>
  );
}

export default Home;
