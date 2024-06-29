import React from 'react';
import { Button } from '@mui/material';
import Form from '../../components/Form/Form';
import useForm from '../../hooks/useForm';
import FormInput from '../../components/FormInput';
import TitleComponent from '../../components/TitleComponent';
import { CustomBackgroundContainer, formInputsSX } from './AccountPage.style';

const AccountPage: React.FC = () => {
  const { formValues, setFormValue, clearFormValues } = useForm('myForm');

  const handleSubmit = (values: Record<string, any>) => {
    console.log('Submitted values:', values);
  };

  const handleCancel = () => {
    console.log('Form cancelled');
  };

  return (
    <>
      <CustomBackgroundContainer>
        <TitleComponent style={{ fontSize: '36px' }}>
          {'Account settings:'}
        </TitleComponent>
        <Form stateKey="myForm" onSubmit={handleSubmit}>
          <FormInput
            formFieldName="username"
            label="Your Name"
            textInputPropsMUI={{
              variant: 'outlined',
              // sx: {
              //   input: { color: ColorEnum.WHITE },
              //   label: { color: ColorEnum.WHITE },
              // }, // todo remove
              sx: formInputsSX,
            }}
          />
          <FormInput
            formFieldName="email"
            label="Your email"
            textInputPropsMUI={{
              variant: 'outlined',
              sx: formInputsSX,
            }}
          />
          <FormInput
            formFieldName="avatar"
            label="Upload an avatar"
            textInputPropsMUI={{
              variant: 'outlined',
              sx: formInputsSX,
            }}
          />
          <Button type="submit">{'Submit'}</Button>
          <Button type="button" onClick={handleCancel}>
            {'Cancel'}
          </Button>
        </Form>
      </CustomBackgroundContainer>
    </>
  );
};

export default React.memo(AccountPage);
