import { useState } from 'react';
import React from 'react';
import login from '../services/login';
const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [jwt, setJwt] = useState('');
  const handleLogin = async () => {
    const loginData = await login();
    console.log(loginData.data);
  };
  return (
    <AuthContext.Provider value={handleLogin}>{children}</AuthContext.Provider>
  );
};

export default AuthContext;
