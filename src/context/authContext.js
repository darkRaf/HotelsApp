import React from "react";

const AuthContext  = React.createContext({
  isAuthenticated: true,
  login: () => {},
  logout: () => {},
});

AuthContext.displayName = 'AuthContext';

export default AuthContext;