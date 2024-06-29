import { useDispatch, useSelector } from 'react-redux';
import { clearFormValues, updateFormValue } from '../redux/actions';
export interface FormState {
  [key: string]: {
    [key: string]: string;
  };
}
const useForm = (stateKey: string) => {
  const dispatch = useDispatch();
  const formValues = useSelector((state: { form: FormState }) => state.form[stateKey] || {});

  const setFormValue = (formFieldName: string, value: string) => {
    dispatch(updateFormValue(stateKey, formFieldName, value));
  };

  const clearFormValuesHandler = () => {
    dispatch(clearFormValues(stateKey));
  };

  return { formValues, setFormValue, clearFormValues: clearFormValuesHandler };
};

export default useForm;
