import { styled } from '@mui/material/styles';
import { TextField } from '@mui/material';

export const CustomTextField = styled(TextField)(({ theme }) => {
  console.log(theme); // Log the theme object

  return {
    marginBottom: theme.spacing(2),
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'rgba(255, 255, 255, 0.6)',
      },
      '&:hover fieldset': {
        borderColor: theme.customTheme.colors.white,
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
      },
      '&.Mui-focused fieldset': {
        borderColor: theme.customTheme.colors.orange,
        boxShadow: `0 0 5px 1px ${theme.customTheme.colors.orange}`,
      },
    },
    '& .MuiInputLabel-outlined': {
      color: 'rgba(255, 255, 255, 0.6)',
      '&.Mui-focused': {
        color: theme.customTheme.colors.white,
        backgroundColor: theme.customTheme.colors.background,
        padding: '2px 10px',
        marginLeft: '-5px',
        borderRadius: '10px',
      },
    },
    '& .MuiInputBase-input': {
      color: theme.customTheme.colors.white,
    },
  };
});
