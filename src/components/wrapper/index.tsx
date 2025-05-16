import classNames from 'classnames';
import { PropsWithChildren } from 'react';

interface WrapperProps {
  className?: string;
  style?: React.CSSProperties;
}

const Wrapper = ({ children, className }: PropsWithChildren<WrapperProps>) => {
  const classes = classNames(
    'py-40 px-4 w-full h-screen bg-gray-50 overflow-y-auto',
    className,
  );

  return (
    <div className={classes}>
      {children}
    </div>
  )
};

export default Wrapper;
