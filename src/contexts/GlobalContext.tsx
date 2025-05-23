/* eslint-disable react-refresh/only-export-components */
import { createContext, PropsWithChildren, useState } from 'react';

interface GlobalContextProps {
  isAddSuggestionModalOpen: boolean;
  setAddSuggestionModalOpen: (isOpen: boolean) => void;
  isAddPublicationModalOpen: boolean;
  setAddPublicationModalOpen: (isOpen: boolean) => void;
}

export const GlobalContext = createContext({} as GlobalContextProps);
  
export const GlobalProvider = ({ children }: PropsWithChildren) => {
  const [isAddSuggestionModalOpen, setAddSuggestionModalOpen] = useState(false);
  const [isAddPublicationModalOpen, setAddPublicationModalOpen] = useState(false);

  return (
    <GlobalContext.Provider
      value={{
        isAddSuggestionModalOpen,
        setAddSuggestionModalOpen,
        isAddPublicationModalOpen,
        setAddPublicationModalOpen,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
