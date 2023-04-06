import { createContext, useState } from "react";

export const AuthContext = createContext({
  userInfo: {},
  setUserInfo: () => {},
});

export const AutheContextProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState({});

  return (
    <AuthContext.Provider value={{ userInfo, setUserInfo }}>
      {children}
    </AuthContext.Provider>
  );
};
