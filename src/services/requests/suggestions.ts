import { user } from '@/utils/fakeData';
import { api } from '../api';

export type ICreateSuggestionDto = {
  comment: string;
  suggestedPrice: string;
  publication?: string;
}

export async function createSuggestion(payload: ICreateSuggestionDto) {
  const { data } = await api.post('/suggestions', {
    ...payload,
    user,
  });

  return data;
}
