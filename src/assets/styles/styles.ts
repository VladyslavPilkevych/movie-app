import { createTheme } from '@mui/material/styles';
import { ITheme } from '../../types/types';

declare module '@mui/material/styles' {
  interface Theme {
    customTheme: ITheme;
    active: boolean;
  }
  interface ThemeOptions {
    customTheme?: ITheme;
    active?: boolean;
  }
}

export const customTheme: ITheme = {
  colors: {
    white: '#ffffff',
    black: '#000000',
    background: '#1D1D1D',
    creamWhite: '#EDF5E1',
    lightBlue: '#0FEFFD',
    hoverDarkBlue: '#01203f',
    orange: '#FF7400',
  },
  media: {
    phone: '(max-width: 426px)',
    tablet: '(max-width: 768px) and (min-width: 426px)',
    notLaptop: '(max-width: 768px)',
  },
};

export const theme = createTheme({
  palette: {
    primary: {
      main: customTheme.colors.lightBlue,
    },
    secondary: {
      main: customTheme.colors.orange,
    },
  },
  customTheme,
  active: false,
});
