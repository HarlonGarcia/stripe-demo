import dayjs from 'dayjs';
import { FULL_DATE_FORMAT } from '@/utils/constants';

import Picture from '../picture'

type CardProps = {
  suggestion: ISuggestion;
}

export const Card = ({ suggestion }: CardProps) => {
  return (
    <li className='flex flex-col p-5 rounded-2xl bg-zinc-100 shadow-sm border border-zinc-800/5'>
      <div className='flex justify-between gap-4 mb-4'>
        <div className='flex gap-2'>
          <Picture />
          <div className='flex flex-col'>
            <span>{suggestion.user?.fullName}</span>
            <small className='text-gray-500'>{suggestion.user?.email}</small>
          </div>
        </div>

        <small className='text-gray-500'>
          {dayjs(suggestion.createdAt).format(FULL_DATE_FORMAT)}
        </small>
      </div>

      <p className='text-gray-700 line-clamp-3 mb-4'>
        {suggestion.comment}
      </p>

      <div className='font-bold text-orange-500 text-lg'>
        R$ {suggestion.suggestedPrice.toLocaleString('pt-BR')}
      </div>
    </li>
  )
}
