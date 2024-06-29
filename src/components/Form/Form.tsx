import React, { FC, FormEvent, ReactNode } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FormProvider } from '../../context/FormContext';

interface FormProps {
  stateKey: string;
  onSubmit: (values: Record<string, any>) => void;
  children: ReactNode;
}

const Form: FC<FormProps> = ({ stateKey, onSubmit, children }) => {
  const dispatch = useDispatch();
  const formValues = useSelector((state: any) => state.form[stateKey] || {});

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    onSubmit(formValues);
  };

  return (
    <FormProvider stateKey={stateKey}>
      <form onSubmit={handleSubmit}>
        {children}
      </form>
    </FormProvider>
  );
};

export default Form;
