import React from 'react';
import {
  Alert,
  IconButton,
  InputAdornment,
  Snackbar,
  SnackbarCloseReason,
} from '@mui/material';
import Form from '../../components/Form/Form';
import useForm from '../../hooks/useForm';
import FormInput from '../../components/FormInput';
import TitleComponent from '../../components/TitleComponent';
import {
  CustomBackgroundContainer,
  CustomButton,
  CustomButtonContainer,
  CustomFormPasswordSection,
  CustomFormSection,
  formInputsSX,
} from './AccountPage.style';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { ColorEnum } from '../../assets/styles';
import Toast from '../../components/Toast/Toast';
import { AlertColor } from '../../components/Toast/types';

const AccountPage: React.FC = () => {
  const { formValues, setFormValue, clearFormValues } = useForm('myForm');
  const [toggleSuccessToast, setToggleSuccessToast] = React.useState<boolean>(false);
  const [toggleErrorToast, setToggleErrorToast] = React.useState<boolean>(false);
  const [toggleOldPassword, setToggleOldPassword] = React.useState(false);
  const [toggleNewPassword, setToggleNewPassword] = React.useState(false);

  const handleSubmit = (values: Record<string, any>) => {
    console.log('Submitted values:', values);
    if(!values?.name?.length || !values?.email?.length) {
      setToggleErrorToast(true);
      return;
    }
    setToggleSuccessToast(true);
  };

  const handleClickShowOldPassword = () => setToggleOldPassword((show) => !show);
  const handleClickShowNewPassword = () => setToggleNewPassword((show) => !show);
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  // const handleCancel = () => {
  //   console.log('Form cancelled');
  // };


  return (
    <>
      <CustomBackgroundContainer>
        <Toast message={"Saved successfully!"} toggleToast={toggleSuccessToast} setToggleToast={setToggleSuccessToast} />
        <Toast message={"Something wrong with your input."} toggleToast={toggleErrorToast} setToggleToast={setToggleErrorToast} alertSeverity={AlertColor.WARNING} />
        <Form stateKey="myForm" onSubmit={handleSubmit}>
          <TitleComponent style={{ fontSize: '36px' }}>
            {'Account settings:'}
          </TitleComponent>
          <CustomFormSection>
            <FormInput
              formFieldName="name"
              label="Your Name"
              textInputPropsMUI={{
                variant: 'outlined',
                fullWidth: true,
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
                fullWidth: true,
                sx: formInputsSX,
              }}
            />
            <FormInput
              formFieldName="avatar"
              label="Upload an avatar"
              textInputPropsMUI={{
                variant: 'outlined',
                fullWidth: true,
                sx: formInputsSX,
              }}
            />
          </CustomFormSection>
          <TitleComponent style={{ fontSize: '32px' }}>
            {'Security:'}
          </TitleComponent>

          <CustomFormPasswordSection>
            <FormInput
              formFieldName="oldPassword"
              label="Old Password"
              textInputPropsMUI={{
                variant: 'outlined',
                fullWidth: true,
                sx: formInputsSX,
                type: toggleOldPassword ? 'text' : 'password',
                InputProps: {
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowOldPassword}
                        onMouseDown={handleMouseDownPassword}
                      >
                        {toggleOldPassword ? (
                          <VisibilityOff sx={{ color: ColorEnum.WHITE }} />
                        ) : (
                          <Visibility sx={{ color: ColorEnum.WHITE }} />
                        )}
                      </IconButton>
                    </InputAdornment>
                  ),
                },
              }}
            />
            <FormInput
              formFieldName="newPassword"
              label="New Password"
              textInputPropsMUI={{
                variant: 'outlined',
                fullWidth: true,
                sx: formInputsSX,
                type: toggleNewPassword ? 'text' : 'password',
                InputProps: {
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowNewPassword}
                        onMouseDown={handleMouseDownPassword}
                      >
                        {toggleNewPassword ? (
                          <VisibilityOff sx={{ color: ColorEnum.WHITE }} />
                        ) : (
                          <Visibility sx={{ color: ColorEnum.WHITE }} />
                        )}
                      </IconButton>
                    </InputAdornment>
                  ),
                },
              }}
            />
          </CustomFormPasswordSection>
          <CustomButtonContainer>
            <CustomButton type="submit" variant="outlined" size="large">
              {'Save'}
            </CustomButton>
            {/* <CustomButton
              type="button"
              onClick={handleCancel}
              variant="outlined"
              size="large"
            >
              {'Cancel'}
            </CustomButton> */}
          </CustomButtonContainer>
        </Form>
      </CustomBackgroundContainer>
    </>
  );
};

export default React.memo(AccountPage);
