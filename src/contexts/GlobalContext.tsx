/* eslint-disable react-refresh/only-export-components */
import { createContext, PropsWithChildren, useState } from 'react';

interface GlobalContextProps {
  isAddPostModalOpen: boolean;
  setAddPostModalOpen: (isOpen: boolean) => void;
}

export const GlobalContext = createContext({} as GlobalContextProps);
  
export const GlobalProvider = ({ children }: PropsWithChildren) => {
  const [isAddPostModalOpen, setAddPostModalOpen] = useState(false);

  return (
    <GlobalContext.Provider
      value={{
        isAddPostModalOpen,
        setAddPostModalOpen,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
