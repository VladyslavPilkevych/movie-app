export interface FormState {
  [key: string]: {
    [key: string]: string;
  };
}

export enum ActionTypesEnum {
  UPDATE_FORM_VALUE = "UPDATE_FORM_VALUE",
  CLEAR_FORM_VALUES = "CLEAR_FORM_VALUES",
}

interface UpdateFormValueAction {
  type: ActionTypesEnum.UPDATE_FORM_VALUE;
  payload: {
    stateKey: string;
    formFieldName: string;
    value: string;
  };
}

interface ClearFormValuesAction {
  type: ActionTypesEnum.CLEAR_FORM_VALUES;
  payload: {
    stateKey: string;
  };
}

export type FormActionTypes = UpdateFormValueAction | ClearFormValuesAction;
