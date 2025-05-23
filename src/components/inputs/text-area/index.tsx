import { ChangeEventHandler, ComponentProps } from 'react';

interface TextAreaProps extends ComponentProps<'textarea'> {
  label: string;
  value?: string;
  onChange?: ChangeEventHandler<HTMLTextAreaElement> | undefined;
  error?: string;
}

const TextArea = ({ id, label, error, ...rest }: TextAreaProps) => {
  return (
    <div className='w-full'>
      <label htmlFor={id} className='block text-sm/6 font-medium text-gray-900'>
        {label}
      </label>
      <div className='mt-1'>
        <textarea
          className="w-full h-32 p-3 pb-5 text-zinc-600 text-sm border border-zinc-300 bg-gray-50 rounded-lg focus:outline-none resize-none"
          {...rest}
        />
      </div>
      {error && (
        <p className='text-sm text-red-600'>
          {error}
        </p>
      )}
  </div>
  )
}

export default TextArea;
