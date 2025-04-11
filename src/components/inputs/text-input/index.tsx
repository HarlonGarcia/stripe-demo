import { ChangeEventHandler } from 'react';

interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  value?: string;
  onChange?: ChangeEventHandler<HTMLInputElement> | undefined;
}

const TextInput = (props: TextInputProps) => {
  return (
    <div>
      <label htmlFor={props.id} className='block text-sm/6 font-medium text-gray-900'>
        {props.label}
      </label>
      <div className='mt-1'>
        <div className='flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600'>
          <input
            type='text'
            className='block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6' 
            placeholder='seu@email.com'
            {...props}
          />
        </div>
      </div>
  </div>
  )
}

export default TextInput;
