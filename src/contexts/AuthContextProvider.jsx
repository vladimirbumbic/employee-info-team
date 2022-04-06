import { useState } from 'react';
import React from 'react';
import apiInstance from '../api/axios';
import history from '../components/CustomRouter/history';
const AuthContext = React.createContext();

export const AuthContextProvider = ({ children }) => {
  const [userName, setUserName] = useState('');
  const [userSurname, setUserSurname] = useState('');
  const [userMail, setUserMail] = useState('');
  const [photoUrl, setPhotoUrl] = useState('');

  const login = async () => {
    window.localStorage.clear();
    let response;
    try {
      response = await apiInstance.get('auth/google');
      console.log(response);
      console.log(response.data.token);
    } catch (err) {
      console.error(err);
    }

    if (response.data.token !== undefined) {
      console.log('aa');
      console.log(response.data.role);
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('role', response.data.role);

      const role = localStorage.getItem('role');
      console.log(localStorage.getItem('role'));

      if (role === 'SYSTEM_ADMIN') {
        history.push('/maincontent');
      }

      if (role === 'null') {
        history.push('/welcomeUser');
      }

      setUserName(response.data.name);
      setUserSurname(response.data.surname);
      setUserMail(response.data.email);
      setPhotoUrl(response.user.photo);
    } else {
      localStorage.setItem('token', false);
    }
  };
  return (
    <AuthContext.Provider
      value={{ login, userName, userSurname, userMail, photoUrl }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
