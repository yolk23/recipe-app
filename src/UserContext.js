// ThemeContext.js
import React, { createContext, useState, useContext } from "react";

const UserContext = createContext();

export const useUser = () => useContext(UserContext);

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const logOut = () => {
    setIsLoggedIn(false);
  };

  const logIn = () => {
    setIsLoggedIn(true);
  };

  return (
    <UserContext.Provider value={{ isLoggedIn, logIn, logOut }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
