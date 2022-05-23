import { createContext, useState } from 'react';
import apiInstance from '../services/axios';

const EmployeeContext = createContext();

export const EmpoloyeeContextProvider = ({ children }) => {
  const [navbarSearch, setNavbarSerach] = useState('');
  const [type, setType] = useState('name');
  const [allUsers, setAllUsers] = useState([]);

  const getAllUsers = async () => {
    const { data } = await apiInstance('/api/users/fullUsers');
    setAllUsers(data);
  };

  const filteredListByType = (type) => {
    if (type === 'name') {
      return allUsers.filter((user) =>
        user.name.toLowerCase().startsWith(navbarSearch.toLowerCase()),
      );
    } else if (type === 'city') {
      return allUsers.filter((user) =>
        user.city.name.toLowerCase().startsWith(navbarSearch.toLowerCase()),
      );
    } else if (type === 'country') {
      return allUsers.filter((user) =>
        user.city.country.name
          .toLowerCase()
          .startsWith(navbarSearch.toLowerCase()),
      );
    } else if (type === 'technology') {
      return allUsers.filter((user) =>
        user.mainTechnology.name
          .toLowerCase()
          .startsWith(navbarSearch.toLowerCase()),
      );
    } else if (type === 'seniority') {
      return allUsers.filter((user) =>
        user.seniority.toLowerCase().startsWith(navbarSearch.toLowerCase()),
      );
    }
  };

  return (
    <EmployeeContext.Provider
      value={{
        getAllUsers,
        allUsers,
        setAllUsers,
        navbarSearch,
        setNavbarSerach,
        filteredListByType,
        type,
        setType,
      }}
    >
      {children}
    </EmployeeContext.Provider>
  );
};

export default EmployeeContext;
