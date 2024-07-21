import {
  Box,
  FormControl,
  InputBase,
  alpha,
  styled as styledMUI,
} from '@mui/material';
import styled from 'styled-components';
import { ColorEnum } from '../../assets/styles';

export const FilterMenuSection = styled.section`
  margin: 20px 10%;
  padding: 40px;
  display: flex;
  justify-content: space-between;
`;

export const CustomFormControl = styled(FormControl)`
  height: 40px;
  label {
    color: rgba(256, 256, 256, 0.6);
  }
  & .Mui-focused {
    color: rgba(256, 256, 256, 0.6);
  }
  & .MuiInputLabel-root.Mui-focused {
    color: rgba(255, 255, 255, 1);
  }
  & .MuiInputBase-root {
    color: rgba(255, 255, 255, 0.87);
  }
  & .MuiInputBase-input {
    color: rgba(255, 255, 255, 0.87);
  }
  & .MuiSelect-icon {
    color: rgba(255, 255, 255, 0.87);
  }
  & .MuiOutlinedInput-root {
    & fieldset {
      border-color: rgba(255, 255, 255, 0.6);
    }
    &:hover fieldset {
      border-color: rgba(255, 255, 255, 0.8);
    }
    &.Mui-focused fieldset {
      border-color: rgba(255, 255, 255, 1);
    }
  }
`;

export const CustomChipsBox = styled(Box)`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  margin: 10px;
`;

export const Search = styledMUI('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

export const SearchIconWrapper = styledMUI('div')(({ theme }) => ({
  color: ColorEnum.WHITE,
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

export const StyledInputBase = styledMUI(InputBase)(({ theme }) => ({
  color: ColorEnum.WHITE,
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export const FilteredItemsSection = styled.section`
  margin: 50px;
`;
