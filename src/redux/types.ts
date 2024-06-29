export interface FormState {
  [key: string]: {
    [key: string]: string;
  };
}

interface UpdateFormValueAction {
  type: 'UPDATE_FORM_VALUE';
  payload: {
    stateKey: string;
    formFieldName: string;
    value: string;
  };
}

interface ClearFormValuesAction {
  type: 'CLEAR_FORM_VALUES';
  payload: {
    stateKey: string;
  };
}

export type FormActionTypes = UpdateFormValueAction | ClearFormValuesAction;
