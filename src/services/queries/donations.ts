import { toast } from 'react-toastify';
import { api } from '../api'

export const getDonations = async (): Promise<IDonation[]> => {
  const { data } = await api.get('/donations');

  return data;
}

export const sendDonation = async (payload: IDonation, callback: () => void) => {
  const { data } = await api.post('/receive-donation', payload);

  if (data.status !== 200) {
    toast.error('Ocorreu algum erro, tente novamente!');
    throw new Error('Failed to send donation');
  }

  callback();
  toast.success('Doação feita com sucesso!');

  return data;
}
