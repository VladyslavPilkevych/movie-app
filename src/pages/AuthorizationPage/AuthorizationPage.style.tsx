import { Button, Paper, Box, Tabs, Tab } from '@mui/material';

import { styled, createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {},
});

export const Root = styled('div')({
  backgroundColor: theme?.customTheme?.colors?.background,
  minHeight: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

export const CustomPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  maxWidth: 400,
  width: '100%',
  backgroundColor: theme?.customTheme?.colors?.background,
  color: theme?.customTheme?.colors?.white,
}));

export const TabContent = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(2),
}));

export const CustomTabs = styled(Tabs)(({ theme }) => ({
  '.MuiTabs-indicator': {
    backgroundColor: theme?.customTheme?.colors?.orange,
  },
}));

export const CustomTab = styled(Tab)(({ theme }) => ({
  color: theme?.customTheme?.colors?.white,
  fontSize: '1.2rem',
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
  },
  '&.Mui-selected': {
    color: theme?.customTheme?.colors?.orange,
    fontWeight: 'bold',
  },
}));

export const CustomButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme?.customTheme?.colors?.orange,
  color: theme?.customTheme?.colors?.white,
  '&:hover': {
    backgroundColor: theme?.customTheme?.colors?.orange, // Fallback color '#FF8C00'
  },
}));
