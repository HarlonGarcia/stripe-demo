import { api } from '../api';

export type ICreateSuggestionDto = {
  comment: string;
  suggestedPrice: string;
  publication?: string;
}

const user = {
  id: '10000000-0000-0000-0000-000000000001',
  fullName: 'Breno Duarte',
  email: 'breno.duarte@example.com',
}

export async function createSuggestion(payload: ICreateSuggestionDto) {
  const { data } = await api.post('/suggestions', {
    ...payload,
    user,
  });

  return data;
}
