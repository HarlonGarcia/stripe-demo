import { useState } from 'react';
import EmailInput from '../inputs/email-input';
import MoneyInput from '../inputs/money-input';
import TextInput from '../inputs/text-input';
import { sendDonation } from '../../services/queries/donations';

interface ModalProps {
  title: string;
  isOpen: boolean;
  onClose: () => void;
}

const Modal = ({ title, isOpen, onClose }: ModalProps) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [amount, setAmount] = useState('');
  const [currency, setCurrency] = useState<'USD' | 'BRL'>('BRL');

  const resetValues = () => {
    setName('');
    setEmail('');
    setAmount('');
  }

  const handleConfirm = () => {
    const payload = {
      name,
      email,
      amount,
      currency,
    }

    sendDonation(payload, () => {
      resetValues();
      onClose();
    });
  }

  if (!isOpen) {
    return null;
  }
  return (
    <div className='relative z-10' aria-labelledby='modal-title' role='dialog' aria-modal='true'>
      <div className='fixed inset-0 bg-zinc-950/75 transition-opacity' aria-hidden='true'></div>
      <div className='fixed inset-0 z-10 w-screen overflow-y-auto'>
        <div className='flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0'>
          <div className='relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg'>
            <div className='bg-white p-10'>
              <div className='sm:flex sm:items-start'>
                <div className='mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left'>
                  <h3
                    id='modal-title'
                    className='text-base font-semibold text-gray-900'
                  >
                    {title}
                  </h3>
                  <div className='flex flex-col gap-3 mt-4'>
                    <TextInput
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      label='Nome'
                    />
                    <EmailInput
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      />
                    <MoneyInput
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      currency={currency}
                      onCurrencyChange={(e) => setCurrency(e.target.value as 'USD' | 'BRL')}
                      label='Valor'
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className='bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6'>
              <button
                type='button'
                onClick={handleConfirm}
                className='inline-flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 sm:ml-3 sm:w-auto'
              >
                Enviar
              </button>
              <button
                type='button'
                onClick={onClose}
                className='mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-xs ring-1 ring-gray-300 ring-inset hover:bg-gray-50 sm:mt-0 sm:w-auto'
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      </div>
  </div>
  );
}

export default Modal;
