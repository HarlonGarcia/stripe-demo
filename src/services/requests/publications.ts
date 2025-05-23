import { api } from '../api';

export async function getPublications() {
  const { data } = await api.get('/publications');

  return data;
}

export async function getPublication(id?: string){
  const { data } = await api.get(`/publications/${id}`);

  return data;
}
