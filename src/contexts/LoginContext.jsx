import { createContext, useState } from "react";

const LoginContext = createContext({
  state: { isLogin: false },
  actions: { setIsLogin: () => {} },
});

const LoginProvider = ({ children }) => {
  const [isLogin, setIsLogin] = useState(false);

  const value = {
    state: { isLogin },
    actions: {
      setIsLogin,
    },
  };

  return (
    <LoginContext.Provider value={value}>{children}</LoginContext.Provider>
  );
};

export { LoginProvider, LoginContext };
