import React from 'react';
import login from '../api/login';
const LoginContext = React.createContext();

export const LoginContextProvider = ({ children }) => {
  // const [user, setUser] = useState({});
  const handleLogin = async () => {
    const data = await login();
    console.log(data);
    return data;
  };

  return (
    <LoginContext.Provider value={handleLogin}>
      {children}
    </LoginContext.Provider>
  );
};

export default LoginContext;
