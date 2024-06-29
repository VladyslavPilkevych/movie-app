import { FormState, FormActionTypes, ActionTypesEnum } from './types';

const initialState: FormState = {};

const formReducer = (state = initialState, action: FormActionTypes): FormState => {
  switch (action.type) {
    case ActionTypesEnum.UPDATE_FORM_VALUE: {
      const { stateKey, formFieldName, value } = action.payload;
      return {
        ...state,
        [stateKey]: {
          ...state[stateKey],
          [formFieldName]: value,
        },
      };
    }
    case ActionTypesEnum.CLEAR_FORM_VALUES: {
      return {
        ...state,
        [action.payload.stateKey]: {},
      };
    }
    default:
      return state;
  }
};

export default formReducer;
