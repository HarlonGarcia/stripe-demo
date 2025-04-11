/* eslint-disable react-refresh/only-export-components */
import { createContext, PropsWithChildren, useState } from 'react';

interface GlobalContextProps {
  isDonateModalOpen: boolean;
  setIsDonateModalOpen: (isOpen: boolean) => void;
}

export const GlobalContext = createContext({} as GlobalContextProps);
  
export const GlobalProvider = ({ children }: PropsWithChildren) => {
  const [isDonateModalOpen, setIsDonateModalOpen] = useState(false);

  return (
    <GlobalContext.Provider
      value={{
        isDonateModalOpen,
        setIsDonateModalOpen,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
