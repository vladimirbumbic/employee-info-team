import { useState, createContext } from 'react';
import { getAllEmployees } from '../services/employees';
import { getAllCountires } from '../services/countries';

const ManageDataContext = createContext();

export const ManageDataProvider = ({ children }) => {
  //   const handleCountries = async () => {
  //     const allCountriesResponse = await getAllCountires();
  //     console.log(allCountriesResponse);
  //   };
  return (
    <ManageDataContext.Provider value={{ countries, setCountries }}>
      {children}
    </ManageDataContext.Provider>
  );
};

export default ManageDataContext;
