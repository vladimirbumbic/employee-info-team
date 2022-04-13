import apiInstance from './axios';

export const addCity = async (city, countryId) => {
  try {
    const response = await apiInstance.post('api/cities/', {
      name: city,
      countryId: countryId,
    });
    return response;
  } catch (error) {
    console.log(`Adding city failed - ${error}`);
  }
};

export const getAllCities = async () => {
  try {
    const response = await apiInstance.get(`api/cities`);
    return response;
  } catch (error) {
    console.log(`Getting cities failed - ${error}`);
  }
};

export const deleteCity = async (cityId) => {
  try {
    const response = await apiInstance.delete(`api/cities/${cityId}`);
    return response;
  } catch (error) {
    console.log(`Delete city failed - ${error}`);
  }
};
