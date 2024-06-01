import { useState } from "react";

export const useValidateInput = (initialValue, checkValue, compareValue) => {
  const [inputValue, setInputValue] = useState(initialValue);
  const [inputValid, setInputValid] = useState(false);

  const onChange = (e) => {
    setInputValue(e.target.value);

    if (!checkValue(e.target.value, compareValue)) {
      setInputValid(false);
    }
    if (checkValue(e.target.value, compareValue)) {
      setInputValid(true);
    }
  };
  return [inputValue, inputValid, onChange];
};
