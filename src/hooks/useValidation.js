import { useState, useCallback } from "react";
import { usernameValidation, emailValidation } from "../utils/ValidationConfigs";

export function useFormWithValidation({initialValues} = {}) {
  const [values, setValues] = useState(initialValues || {});
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  const handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    switch (name) {
      case 'username':
        target.validity.patternMismatch
        ? target.setCustomValidity(usernameValidation.message)
        : target.setCustomValidity('')
        break;
      case 'email':
        target.validity.patternMismatch
        ? target.setCustomValidity(emailValidation.message)
        : target.setCustomValidity('')
        break;
      default: target.setCustomValidity('')
    }

    setValues({...values, [name]: value});
    setErrors({...errors, [name]: target.validationMessage });
    setIsValid(target.closest("form").checkValidity());
  };

  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [setValues, setErrors, setIsValid]
  );

  return { values, setValues, handleChange, errors, isValid, setIsValid, resetForm };
}
