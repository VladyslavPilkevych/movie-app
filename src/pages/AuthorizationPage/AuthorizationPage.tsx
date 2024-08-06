import React, { useState, useRef, useEffect } from 'react';
import { Container, Typography } from '@mui/material';
import {
  CustomButton,
  CustomPaper,
  CustomTab,
  CustomTabs,
  Root,
  FormContainer,
  FormInputContainer,
  TabContent,
  StaticContainer,
  MovingContainer,
  HeadingTypography,
  BodyTypography,
  ForgotPasswordButton,
} from './AuthorizationPage.style';
import { Form, FormInput } from '../../components';

const AuthorizationPage: React.FC = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleTabChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setTabIndex(newValue);
  };

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.style.height = `${containerRef.current.scrollHeight}px`;
    }
  }, [tabIndex]);

  return (
    <Root>
      <Container
        component="main"
        maxWidth="md"
        ref={containerRef}
        style={{ transition: 'height 0.3s ease' }}
      >
        <CustomPaper>
          <CustomTabs value={tabIndex} onChange={handleTabChange} centered>
            <CustomTab label="Login" />
            <CustomTab label="Create Account" />
          </CustomTabs>
          <TabContent>
            <StaticContainer sx={{ width: '50%' }}>
              <FormContainer isActive={tabIndex === 0}>
                <Login />
              </FormContainer>
            </StaticContainer>

            <StaticContainer>
              <FormContainer isActive={tabIndex === 1}>
                <CreateAccountForm />
              </FormContainer>
            </StaticContainer>

            <MovingContainer style={{ right: `${tabIndex * 50}%` }}>
              {tabIndex === 0 ? (
                <>
                  <HeadingTypography variant="h5">
                    {'Welcome Back!'}
                  </HeadingTypography>
                  <BodyTypography>
                    {
                      'We’re glad to see you again. Please log in to your account to access your personalized dashboard and stay updated.'
                    }
                  </BodyTypography>
                  <ForgotPasswordButton>
                    {'Forgot your password? Reset it here'}
                  </ForgotPasswordButton>
                </>
              ) : (
                <>
                  <HeadingTypography variant="h5">
                    {'Create Your Account'}
                  </HeadingTypography>
                  <BodyTypography>
                    {
                      'Join our community and start exploring! Please fill out the form below to create your new account.'
                    }
                  </BodyTypography>
                </>
              )}
            </MovingContainer>
          </TabContent>
        </CustomPaper>
      </Container>
    </Root>
  );
};

const Login: React.FC = () => {
  const handleSubmit = () => {
    console.log('submit');
  };

  return (
    <Form stateKey="login" onSubmit={handleSubmit}>
      <Typography variant="h5">{'Login'}</Typography>
      <FormInputContainer>
        <FormInput
          formFieldName="email"
          textInputPropsMUI={{
            required: true,
            autoComplete: 'email',
          }}
          label="Email Address"
          type="email"
        />
        <FormInput
          formFieldName="password"
          textInputPropsMUI={{
            required: true,
            autoComplete: 'password',
          }}
          label="Password"
          type="password"
        />
      </FormInputContainer>
      <CustomButton type="submit" fullWidth variant="contained">
        {'Sign In'}
      </CustomButton>
    </Form>
  );
};

const CreateAccountForm: React.FC = () => {
  const handleSubmit = () => {
    console.log('submit');
  };
  return (
    <Form stateKey="createAccount" onSubmit={handleSubmit}>
      <Typography variant="h5">{'Create Account'}</Typography>
      <FormInputContainer>
        <FormInput
          formFieldName="email"
          textInputPropsMUI={{
            required: true,
            autoComplete: 'email',
          }}
          label="Email Address"
          type="email"
        />
        <FormInput
          formFieldName="password"
          textInputPropsMUI={{
            required: true,
            autoComplete: 'current-password',
          }}
          label="Password"
          type="password"
        />
        <FormInput
          formFieldName="confirmPassword"
          textInputPropsMUI={{
            required: true,
            autoComplete: 'confirm-password',
          }}
          label="Confirm Password"
          type="password"
        />
      </FormInputContainer>
      <CustomButton type="submit" fullWidth variant="contained">
        {'Sign Up'}
      </CustomButton>
    </Form>
  );
};

export default React.memo(AuthorizationPage);
