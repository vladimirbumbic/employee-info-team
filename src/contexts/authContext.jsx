import { useState, createContext } from 'react';
import history from '../components/CustomRouter/history';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [loginData, setLoginData] = useState(
    localStorage.getItem('loginData')
      ? JSON.parse(localStorage.getItem('loginData'))
      : null,
  );

  const handleLogin = async (googleData) => {
    const res = await fetch('api/google-login', {
      method: 'POST',
      body: JSON.stringify({
        token: googleData.tokenId,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    console.log(googleData);

    const data = await res.json();

    setLoginData(data);
    console.log(loginData);
    localStorage.setItem('loginData', JSON.stringify(data));
  };

  const handleLogOut = () => {
    localStorage.removeItem('loginData');
    history.push('/');
    setLoginData(null);
  };

  const handleLoginFailure = (result) => {
    alert(result);
  };

  return (
    <AuthContext.Provider
      value={{ loginData, handleLogin, handleLogOut, handleLoginFailure }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
