import { user } from '@/utils/fakeData';
import { api } from '../api';

export type ICreatePublicationDto = {
  title: string;
  description: string;
}

export async function getPublications() {
  const { data } = await api.get('/publications');

  return data;
}

export async function getPublication(id?: string) {
  const { data } = await api.get(`/publications/${id}`);

  return data;
} 

export async function createPublication(payload: ICreatePublicationDto) {
  const { data } = await api.post('/publications', {
    ...payload,
    user,
  });

  return data;
}
