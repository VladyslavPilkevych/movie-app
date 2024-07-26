import {
  Box,
  FormControl,
  InputBase,
  alpha,
  styled as styledMUI,
  Select as MUISelect,
  MenuItem as MUIMenuItem,
  Checkbox,
  Chip
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

export const DarkSelect = styledMUI(MUISelect)(({ theme }) => ({
  color: theme?.customTheme?.colors?.white,
  '.MuiOutlinedInput-notchedOutline': {
    borderColor: theme?.customTheme?.colors?.background,
  },
  '&:hover .MuiOutlinedInput-notchedOutline': {
    borderColor: theme?.customTheme?.colors?.background,
  },
  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
    borderColor: theme?.customTheme?.colors?.background,
  },
  '.MuiSelect-select:focus': {
    backgroundColor: 'transparent',
  },
}));

export const DarkMenuItem = styledMUI(MUIMenuItem)(({ theme }) => ({
  backgroundColor: theme?.customTheme?.colors?.background,
  color: theme?.customTheme?.colors?.white,
  '&:hover': {
    backgroundColor: theme?.customTheme?.colors?.backgroundLight,
  },
  '&.Mui-selected': {
    color: theme?.customTheme?.colors?.orange,
    backgroundColor: theme?.customTheme?.colors?.backgroundLight,
    '&:hover': {
      backgroundColor: theme?.customTheme?.colors?.hoverDarkBlue,
    },
  },
  '&.Mui-focusVisible': {
    backgroundColor: theme?.customTheme?.colors?.backgroundLight,
  },
}));

export const OrangeCheckbox = styledMUI(Checkbox)(({ theme }) => ({
  color: theme?.customTheme?.colors?.white,
  '&.Mui-checked': {
    color: theme?.customTheme?.colors?.orange,
  },
}));

export const StyledChip = styled(Chip)`
  border: 1px solid rgba(255, 255, 255, 0.8);
  &:hover {
    border: 1px solid rgba(256, 256, 256, 1);
  }
  color: rgba(255, 255, 255, 0.8);
  & .MuiChip-deleteIcon {
    color: rgba(255, 255, 255, 0.8);
    &:hover {
      color: rgba(256, 256, 256, 1);
    }
    &:active {
      color: rgba(256, 256, 256, 0.4);
    }
  }
`;
