import { ChangeEventHandler, useState } from 'react';

interface MoneyInputProps {
  label: string;
  value?: string;
  currency?: 'USD' | 'BRL';
  error?: string;
  onChange?: ChangeEventHandler<HTMLInputElement> | undefined;
  onCurrencyChange?: ChangeEventHandler<HTMLSelectElement> | undefined;
}

const Icon = () => (
  <svg className='pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4' viewBox='0 0 16 16' fill='currentColor' aria-hidden='true' data-slot='icon'>
    <path fillRule='evenodd' d='M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z' clipRule='evenodd' />
  </svg>
)

const MoneyInput = ({ label, error, currency = 'BRL', onCurrencyChange, ...rest }: MoneyInputProps) => {
  const [c, setC] = useState<string>(currency);

  const onCurrencyChangeHandler: ChangeEventHandler<HTMLSelectElement> = (e) => {
    setC(e.target.value);

    if (onCurrencyChange) {
      onCurrencyChange(e);
    }
  }

  return (
    <div>
      <label htmlFor='price' className='block text-sm/6 font-medium text-gray-900'>
        {label}
      </label>
      <div className='mt-1'>
        <div className='flex items-center border border-zinc-300 bg-gray-50 rounded-lg pl-3'>
          <div className='shrink-0 text-base text-gray-500 select-none sm:text-sm/6'>
            {c === 'USD' ? '$' : 'R$'}
          </div>
          <input
            id='price'
            name='price'
            type='text'
            className='block min-w-0 grow py-1.5 pr-3 pl-1 text-zinc-600 text-sm placeholder:text-gray-400 focus:outline-none sm:text-sm/6' 
            placeholder='0.00'
            {...rest}
          />
  
          <div className='grid shrink-0 grid-cols-1 focus-within:relative'>
            <select
              id='currency'
              name='currency'
              value={c}
              onChange={onCurrencyChangeHandler}
              aria-label='Currency'
              className='col-start-1 row-start-1 w-full appearance-none rounded-md py-1.5 pr-7 pl-3 text-base text-gray-500 placeholder:text-gray-400 cursor-pointer focus:outline-none sm:text-sm/6'
            >
              <option value={'USD'}>USD</option>
              <option value={'BRL'}>BRL</option>
            </select>
            <Icon />
          </div>
        </div>
        {error && (
            <p className='mt-2 text-sm text-red-600'>
              {error}
            </p>
          )}
      </div>
  </div>
  )
}

export default MoneyInput;
