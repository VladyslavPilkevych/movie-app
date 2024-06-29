export const updateFormValue = (stateKey: string, formFieldName: string, value: any) => ({
    type: 'UPDATE_FORM_VALUE',
    payload: { formFieldName, value },
});

export const clearFormValues = (stateKey: string) => ({
    type: 'CLEAR_FORM_VALUES',
    payload: { stateKey },
});
