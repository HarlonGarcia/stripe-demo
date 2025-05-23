import { ChangeEventHandler } from 'react';

interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  value?: string;
  onChange?: ChangeEventHandler<HTMLInputElement> | undefined;
  error?: string;
}

const TextInput = ({ id, label, error, ...rest }: TextInputProps) => {
  return (
    <div>
      <label htmlFor={id} className='block text-sm/6 font-medium text-gray-900'>
        {label}
      </label>
      <div className='mt-1'>
        <div className='flex items-center rounded-md bg-gray-50 pl-3 ouotline-none ring-1 ring-gray-300'>
          <input
            type='text'
            className='block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6' 
            placeholder='Seu nome'
            {...rest}
          />
        </div>
      </div>
      {error && (
        <p className='mt-2 text-sm text-red-600'>
          {error}
        </p>
      )}
  </div>
  )
}

export default TextInput;
