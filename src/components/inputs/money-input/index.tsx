import { ChangeEventHandler } from 'react';

interface MoneyInputProps {
  label: string;
  value?: string;
  onChange?: ChangeEventHandler<HTMLInputElement> | undefined;
  currency?: 'USD' | 'BRL';
  onCurrencyChange?: ChangeEventHandler<HTMLSelectElement> | undefined;
}

const Icon = () => (
  <svg className='pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4' viewBox='0 0 16 16' fill='currentColor' aria-hidden='true' data-slot='icon'>
    <path fill-rule='evenodd' d='M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z' clip-rule='evenodd' />
  </svg>
)

const MoneyInput = ({ label, currency, onCurrencyChange, ...rest }: MoneyInputProps) => {
  return (
    <div>
      <label htmlFor='price' className='block text-sm/6 font-medium text-gray-900'>
        {label}
      </label>
      <div className='mt-1'>
        <div className='flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600'>
          <div className='shrink-0 text-base text-gray-500 select-none sm:text-sm/6'>
            {currency === 'USD' ? '$' : 'R$'}
          </div>
          <input
            id='price'
            name='price'
            type='text'
            className='block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6' 
            placeholder='0.00'
            {...rest}
          />
          <div className='grid shrink-0 grid-cols-1 focus-within:relative'>
            <select
              id='currency'
              name='currency'
              value={currency}
              onChange={onCurrencyChange}
              aria-label='Currency'
              className='col-start-1 row-start-1 w-full appearance-none rounded-md py-1.5 pr-7 pl-3 text-base text-gray-500 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6'
            >
              <option>USD</option>
              <option>BRL</option>
            </select>
            <Icon />
          </div>
        </div>
      </div>
  </div>
  )
}

export default MoneyInput;
