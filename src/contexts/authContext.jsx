import { useState, createContext } from 'react';
import history from '../components/CustomRouter/history';
import { getAllCountires } from '../services/countries';
import { getAllCities } from '../services/cities';
import { getAllEmployees } from '../services/employees';
import apiInstance from '../services/axios';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [cities, setCities] = useState(
    JSON.parse(window.localStorage.getItem('cities')),
  );
  const [countries, setCountries] = useState(
    JSON.parse(window.localStorage.getItem('countries')),
  );
  const [users, setUsers] = useState(
    JSON.parse(window.localStorage.getItem('users')),
  );
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

    const data = await res.json();
    setLoginData(data);

    localStorage.setItem('loginData', JSON.stringify(data));

    const allCountriesResponse = await getAllCountires();
    const allCities = await getAllCities();
    const allUsers = await getAllEmployees();

    window.localStorage.setItem('users', JSON.stringify(allUsers.data));
    setUsers(JSON.parse(localStorage.getItem('users')));
    console.log(window.localStorage.getItem('users'));
    window.localStorage.setItem('cities', JSON.stringify(allCities.data));
    setCities(JSON.parse(window.localStorage.getItem('cities')));
    console.log(window.localStorage.getItem('cities'));

    window.localStorage.setItem(
      'countries',
      JSON.stringify(allCountriesResponse.data),
    );
    setCountries(JSON.parse(window.localStorage.getItem('countries')));
  };

  const handleLogOut = () => {
    localStorage.removeItem('loginData');
    localStorage.removeItem('countries');
    localStorage.removeItem('cities');
    localStorage.removeItem('users');
    history.push('/');
    setLoginData(null);
  };

  const handleLoginFailure = (result) => {
    alert(result);
  };

  return (
    <AuthContext.Provider
      value={{
        loginData,
        handleLogin,
        handleLogOut,
        handleLoginFailure,
        countries,
        setCountries,
        cities,
        setCities,
        users,
        setUsers,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
