import { createContext, useState } from 'react';
import apiInstance from '../services/axios';

const EmployeeContext = createContext();

export const EmpoloyeeContextProvider = ({ children }) => {
  const [navbarSearch, setNavbarSerach] = useState('');
  const [allUsers, setAllUsers] = useState([]);

  const getAllUsers = async () => {
    const { data } = await apiInstance('/api/users/fullUsers');
    setAllUsers(data);
  };

  return (
    <EmployeeContext.Provider
      value={{
        getAllUsers,
        allUsers,
        setAllUsers,
        navbarSearch,
        setNavbarSerach,
      }}
    >
      {children}
    </EmployeeContext.Provider>
  );
};

export default EmployeeContext;
