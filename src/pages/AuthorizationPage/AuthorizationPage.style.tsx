import { Button, Paper, Box, Tabs, Tab, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { theme } from '../../assets/styles';

export const Root = styled('div')({
  backgroundColor: theme.customTheme.colors.background,
  minHeight: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

export const CustomPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  maxWidth: '100%',
  width: '100%',
  backgroundColor: theme.customTheme.colors.background,
  color: theme.customTheme.colors.white,
}));

export const CustomTabs = styled(Tabs)(({ theme }) => ({
  display: "flex",
  justifyContent: 'space-evenly',
  '& .MuiTabs-flexContainer': {
    justifyContent: 'space-evenly',
  },
  '.MuiTabs-indicator': {
    backgroundColor: theme.customTheme.colors.orange,
  },
}));

export const CustomTab = styled(Tab)(({ theme }) => ({
  color: theme.customTheme.colors.white,
  fontSize: '1.2rem',
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
  },
  '&.Mui-selected': {
    color: theme.customTheme.colors.orange,
    fontWeight: 'bold',
  },
}));

export const TabContent = styled(Box)`
  display: flex;
  position: relative;
  width: 100%;
  min-height: 500px;
  margin-top: 16px;
`;

export const StaticContainer = styled(Box)`
  flex: 1;
  padding: 16px;
`;

export const MovingContainer = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: 0,
  bottom: 0,
  backgroundColor: theme.customTheme.colors.hoverDarkBlue,
  color: theme.customTheme.colors.white,
  borderRadius: '8px',
  padding: '12px',
  transition: 'right 0.5s ease',
  zIndex: 5,
  width: '50%',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
}));

export const HeadingTypography = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  marginBottom: '16px',
}));

export const BodyTypography = styled(Typography)(({ theme }) => ({
  marginBottom: '16px',
}));

export const ForgotPasswordButton = styled(Button)(({ theme }) => ({
  color: theme.customTheme.colors.orange,
  textDecoration: 'underline',
  padding: 0,
  marginTop: '16px',
}));


export const CustomButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.customTheme.colors.orange,
  color: theme.customTheme.colors.white,
  '&:hover': {
    backgroundColor: theme.customTheme.colors.orange,
  },
}));

export const FormContainer = styled(Box)<{ isActive: boolean }>(({ theme, isActive }) => ({
  display: isActive ? 'block' : 'none',
  padding: theme.spacing(3),
  maxWidth: '400px',
  margin: '0 auto',
}));

export const FormInputContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
});

export const SideContainer = styled(Box)<{ isActive: boolean }>(({ theme, isActive }) => ({
  flex: 1,
  zIndex: 5,
  backgroundColor: theme.customTheme.colors.background,
  color: theme.customTheme.colors.white,
  padding: theme.spacing(2),
  transition: 'transform 0.3s ease',
  transform: isActive ? 'translateX(-100%)' : 'translateX(0)',
  position: 'absolute',
  right: 0,
  top: 0,
  bottom: 0,
}));
