import React from 'react';
import { Button } from '@mui/material';
import Form from '../../components/Form/Form';
import useForm from '../../hooks/useForm';
import FormInput from '../../components/FormInput';

const AccountPage: React.FC = () => {
  const { formValues, setFormValue, clearFormValues } = useForm('myForm');

  const handleSubmit = (values: Record<string, any>) => {
    console.log('Submitted values:', values);
  };

  const handleCancel = () => {
    console.log('Form cancelled');
  };

  return (
    <Form stateKey="myForm" onSubmit={handleSubmit}>
      <FormInput formFieldName="username" label="Username" />
      <FormInput formFieldName="email" label="Email" />
      <Button type="submit">{"Submit"}</Button>
      <Button type="button" onClick={handleCancel}>{"Cancel"}</Button>
    </Form>
  );

};

export default React.memo(AccountPage);
