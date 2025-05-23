import { PropsWithChildren } from 'react';

interface SpinnerWrapperProps {
  loading: boolean;
}

const SpinnerWrapper = ({ loading, children }: PropsWithChildren<SpinnerWrapperProps>) => {
  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-white/30">
        <div className="w-12 h-12 border-4 border-orange-500 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return <>{children}</>;
};

export default SpinnerWrapper;
