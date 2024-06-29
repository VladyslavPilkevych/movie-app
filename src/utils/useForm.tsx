// import { useDispatch, useSelector } from 'react-redux';
// import { updateField, setFormValues } from '../store';
// import { RootState, AppDispatch } from '../store';

// const useForm = () => {
//   const dispatch = useDispatch<AppDispatch>();
//   const formValues = useSelector((state: RootState) => state.form.formValues);

//   const setFieldValue = (name: string, value: string) => {
//     dispatch(updateField({ name, value }));
//   };

//   const getFieldValue = (name: string) => {
//     return formValues[name] || '';
//   };

//   const setForm = (values: { [key: string]: string }) => {
//     dispatch(setFormValues(values));
//   };

//   return {
//     formValues,
//     setFieldValue,
//     getFieldValue,
//     setForm
//   };
// };

// export default useForm;

export const test = "test";