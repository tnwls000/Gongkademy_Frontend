import { useState } from "react";

export const useInput = (initialValue) => {
  const [inputValue, setInputValue] = useState(initialValue);

  const onChange = (e) => {
    setInputValue(e.target.value);
  };
  return [inputValue, onChange];
};
