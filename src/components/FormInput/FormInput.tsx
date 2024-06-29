import React, { FC } from 'react';
import { TextField } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useFormContext } from '../../context/FormContext';

interface InputProps {
  formFieldName: string;
  label: string;
  type?: string;
}

const FormInput: FC<InputProps> = ({ formFieldName, label, type = 'text' }) => {
  const { stateKey } = useFormContext();
  const dispatch = useDispatch();
  const value = useSelector((state: any) => state.form[stateKey]?.[formFieldName] || '');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: 'UPDATE_FORM_VALUE', payload: { stateKey, formFieldName, value: event.target.value } });
  };

  return (
    <TextField
      label={label}
      type={type}
      value={value}
      onChange={handleChange}
    />
  );
};

export default FormInput;
