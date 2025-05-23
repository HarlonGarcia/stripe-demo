import { PropsWithChildren } from 'react';
import { ClassNameValue, twMerge } from 'tailwind-merge';

export interface ModalProps {
  title: string;
  open: boolean;
  okButtonText: string;
  cancelButtonText: string;
  onClose: () => void;
  onConfirm: () => void;
  className?: string;
}

export const Modal = ({
  children,
  title,
  open,
  okButtonText,
  cancelButtonText,
  onClose,
  onConfirm,
}: PropsWithChildren<ModalProps>) => {
  const backdropClasses = twMerge('fixed inset-0 bg-gray-500/75 transition-opacity',
    open ? 'opacity-100' : 'opacity-0 pointer-events-none',
  );

  const modalClasses = twMerge('relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all ease-in-out duration-300 sm:my-8 sm:w-full sm:max-w-lg',
    open ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none',
  );

  const tw = (classes: ClassNameValue) => {
    return twMerge(classes, open ? 'pointer-events-auto' : 'pointer-events-none'); 
  }

  return (
    <div className='relative z-10' aria-labelledby='modal-title' role='dialog' aria-modal='true'>
    <div className={backdropClasses} aria-hidden='true'></div>
      <div className={tw('fixed inset-0 z-10 w-screen overflow-y-auto')}>
        <div className='flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0'>
          <div className={modalClasses}>
            <div className='bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4'>
              <div className='sm:flex sm:items-start'>
                <div className='mt-3 text-center w-full sm:mt-0 sm:text-left'>
                  <h3 className='text-xl font-semibold text-zinc-800' id='modal-title'>{title}</h3>
                  <div className='mt-2'>
                    {children}
                  </div>
                </div>
              </div>
            </div>
            <div className='flex gap-2 bg-gray-50 px-4 py-3 sm:px-6'>
              <button
                type='button'
                className='inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold border border-zinc-800 text-zinc-800 shadow-xs translation-all duration-300 ease-in-out hover:bg-zinc-800 hover:text-white sm:w-auto'
                onClick={onClose}
              >
                {cancelButtonText}
              </button>
              <button
                type='button'
                className='mt-3 inline-flex w-full justify-center rounded-md bg-orange-500 px-3 py-2 text-sm font-semibold text-white shadow-xs translation-all duration-300 ease-in-out hover:bg-orange-600 sm:mt-0 sm:w-auto'
                onClick={onConfirm}
              >
                {okButtonText}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
