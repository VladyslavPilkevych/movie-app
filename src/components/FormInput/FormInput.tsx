import React, { FC } from 'react';
import { TextField, TextFieldProps } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useFormContext } from '../../context/FormContext';
import { ActionTypesEnum } from '../../redux/types';

interface InputProps {
  formFieldName: string;
  label: string;
  type?: string;
  textInputPropsMUI?: TextFieldProps;
}

const FormInput: FC<InputProps> = ({ formFieldName, label, type = 'text', textInputPropsMUI }) => {
  const { stateKey } = useFormContext();
  const dispatch = useDispatch();
  const value = useSelector((state: any) => state.form[stateKey]?.[formFieldName] || '');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: ActionTypesEnum.UPDATE_FORM_VALUE, payload: { stateKey, formFieldName, value: event.target.value } });
  };

  return (
    <TextField
      label={label}
      type={type}
      value={value}
      onChange={handleChange}
      {...textInputPropsMUI}
    />
  );
};

export default FormInput;
