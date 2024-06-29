import { ActionTypesEnum } from "./types";

export const updateFormValue = (stateKey: string, formFieldName: string, value: any) => ({
    type: ActionTypesEnum.UPDATE_FORM_VALUE,
    payload: { formFieldName, value },
});

export const clearFormValues = (stateKey: string) => ({
    type: ActionTypesEnum.CLEAR_FORM_VALUES,
    payload: { stateKey },
});
