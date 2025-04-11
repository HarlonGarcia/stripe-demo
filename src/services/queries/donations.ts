import { toast } from 'react-toastify';
import { api } from '../api'

type IDonationRequest = {
  name: string;
  email: string;
  amount: string;
  currency: 'USD' | 'BRL';
}

export const sendDonation = async (payload: IDonationRequest, callback: () => void) => {
  console.log(payload);

  const { data } = await api.post('/donations', payload);

  if (data.status !== 'success') {
    toast.error('Ocorreu algum erro, tente novamente!');
    throw new Error('Failed to send donation');
  }

  callback();
  toast.success('Doação feita com sucesso!');

  return data;
}
