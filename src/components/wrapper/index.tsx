import classNames from 'classnames';
import { PropsWithChildren } from 'react';

interface WrapperProps {
  className?: string;
  style?: React.CSSProperties;
}

const Wrapper = ({ children, className }: PropsWithChildren<WrapperProps>) => {
  const classes = classNames(
    'py-40 w-full h-screen bg-gradient-to-b from-slate-950 to-indigo-900/50',
    className,
  );

  return (
    <div className={classes}>
      {children}
    </div>
  )
};

export default Wrapper;
