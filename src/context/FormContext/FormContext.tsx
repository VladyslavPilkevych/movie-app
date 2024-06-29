import React, { createContext, useContext } from 'react';

interface FormContextType {
  stateKey: string;
}

const FormContext = createContext<FormContextType | undefined>(undefined);

export const useFormContext = () => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error('useFormContext must be used within a FormProvider');
  }
  return context;
};

interface FormProviderProps {
  stateKey: string;
  children: React.ReactNode;
}

export const FormProvider: React.FC<FormProviderProps> = ({ stateKey, children }) => (
  <FormContext.Provider value={{ stateKey }}>
    {children}
  </FormContext.Provider>
);
