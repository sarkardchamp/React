import React, { useState } from "react";

let timer;

const AuthContext = React.createContext({
  token: "",
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},
});

const getToken = () => {
  const expirationTime = localStorage.getItem("expirationTime");
  if (
    !expirationTime ||
    +expirationTime < new Date(new Date().getTime() + 15000).getTime()
  ) {
    return null;
  } else {
    return localStorage.getItem("token");
  }
};

export const AuthContextProvider = (props) => {
  const initialToken = getToken();
  const [token, setToken] = useState(initialToken);
  const isLoggedIn = !!token;

  const logoutHandler = () => {
    if (timer) {
      clearTimeout(timer);
    }
    setToken(null);
    localStorage.removeItem("expirationTime");
    localStorage.removeItem("token");
  };

  const loginHandler = (token, expiresIn) => {
    const expirationTime =
      new Date(new Date().getTime() + expiresIn * 1000).getTime() + "";
    localStorage.setItem("token", token);
    localStorage.setItem("expirationTime", expirationTime);
    setToken(token);
    console.log(expirationTime - new Date().getTime());
    timer = setTimeout(logoutHandler, expirationTime);
  };
  return (
    <AuthContext.Provider
      value={{
        token: token,
        isLoggedIn: isLoggedIn,
        login: loginHandler,
        logout: logoutHandler,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
