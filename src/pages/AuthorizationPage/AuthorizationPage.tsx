import React, { useState, useRef, useEffect } from 'react';
import { Container, Tab, Tabs, Typography } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import {
  CustomButton,
  CustomPaper,
  CustomTab,
  CustomTabs,
  Root,
  TabContent,
  theme,
} from './AuthorizationPage.style';
import { Form, FormInput } from '../../components';

const AuthorizationPage: React.FC = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const tabContentRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleTabChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setTabIndex(newValue);
  };

  const handleSubmit = () => {
    console.log('submit');
  };

  useEffect(() => {
    if (tabContentRef.current && containerRef.current) {
      containerRef.current.style.height = `${tabContentRef.current.offsetHeight}px`;
    }
  }, [tabIndex]);

  return (
    <ThemeProvider theme={theme}>
      <Root>
        <Container component="main" maxWidth="xs" ref={containerRef} style={{ transition: 'height 0.3s ease' }}>
          <CustomPaper>
            <CustomTabs value={tabIndex} onChange={handleTabChange} centered>
              <CustomTab label="Login" />
              <CustomTab label="Create Account" />
            </CustomTabs>
            <TabContent ref={tabContentRef}>
              {tabIndex === 0 && (
                <Form stateKey="login" onSubmit={handleSubmit}>
                  <Typography variant="h5">{'Login'}</Typography>
                  <FormInput
                    formFieldName="email"
                    textInputPropsMUI={{
                      required: true,
                      fullWidth: true,
                      autoComplete: 'email',
                    }}
                    label="Email Address"
                    type="email"
                  />
                  <FormInput
                    formFieldName="password"
                    textInputPropsMUI={{
                      required: true,
                      fullWidth: true,
                      autoComplete: 'password',
                    }}
                    label="Password"
                    type="password"
                  />
                  <CustomButton type="submit" fullWidth variant="contained">
                    {'Sign In'}
                  </CustomButton>
                </Form>
              )}
              {tabIndex === 1 && (
                <Form stateKey="createAccount" onSubmit={handleSubmit}>
                  <Typography variant="h5">{'Create Account'}</Typography>
                  <FormInput
                    formFieldName="email"
                    textInputPropsMUI={{
                      required: true,
                      fullWidth: true,
                      autoComplete: 'email',
                    }}
                    label="Email Address"
                    type="email"
                  />
                  <FormInput
                    formFieldName="password"
                    textInputPropsMUI={{
                      required: true,
                      fullWidth: true,
                      autoComplete: 'current-password',
                    }}
                    label="Password"
                    type="password"
                  />
                  <FormInput
                    formFieldName="confirmPassword"
                    textInputPropsMUI={{
                      required: true,
                      fullWidth: true,
                      autoComplete: 'confirm-password',
                    }}
                    label="Password"
                    type="password"
                  />
                  <CustomButton type="submit" fullWidth variant="contained">
                    {'Sign Up'}
                  </CustomButton>
                </Form>
              )}
            </TabContent>
          </CustomPaper>
        </Container>
      </Root>
    </ThemeProvider>
  );
};

export default React.memo(AuthorizationPage);
