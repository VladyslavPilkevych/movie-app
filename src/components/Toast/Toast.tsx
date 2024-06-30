import React from 'react';
import { Alert, Snackbar } from '@mui/material';
import {
  toastHorizontalPosition,
  toastVerticalPosition,
  AlertColor,
} from './types';

interface IToastProps {
  message: string;
  toggleToast: boolean;
  setToggleToast: React.Dispatch<React.SetStateAction<boolean>>;
  alertSeverity?: AlertColor;
  verticalPosition?: toastVerticalPosition;
  horizontalPosition?: toastHorizontalPosition;
}

const Toast: React.FC<IToastProps> = (props) => {
  const {
    message,
    toggleToast,
    setToggleToast,
    alertSeverity = AlertColor.SUCCESS,
    verticalPosition = toastVerticalPosition.TOP,
    horizontalPosition = toastHorizontalPosition.RIGHT,
  } = props;

  const handleCloseToast = () => {
    setToggleToast(false);
  };

  return (
    <>
      <Snackbar
        open={toggleToast}
        autoHideDuration={6000}
        onClose={handleCloseToast}
        anchorOrigin={{
          vertical: verticalPosition,
          horizontal: horizontalPosition,
        }}
      >
        <Alert
          onClose={handleCloseToast}
          severity={alertSeverity}
          sx={{ width: '100%' }}
        >
          {message}
        </Alert>
      </Snackbar>
    </>
  );
};

export default React.memo(Toast);
