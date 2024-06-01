import { useState } from "react";
export const useVisible = () => {
  const [isVisible, setIsVisible] = useState(false);

  const onClick = (e) => {
    e.preventDefault();
    setIsVisible(!isVisible);
  };

  return [isVisible, onClick];
};
