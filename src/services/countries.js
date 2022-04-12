import apiInstance from './axios';

export const addCountry = async (country) => {
  try {
    const response = await apiInstance.post('api/countries/', {
      name: country,
    });
    return response;
  } catch (error) {
    console.log(`Adding country failed - ${error}`);
  }
};

export const getAllCountires = async () => {
  try {
    const response = await apiInstance.get('api/countries');
    return response;
  } catch (error) {
    console.log(`Getting countries failed - ${error}`);
  }
};

export const deleteCountry = async (countryId) => {
  try {
    const response = await apiInstance.delete(`api/countries/${countryId}`);
    return response;
  } catch (error) {
    console.log(`Delete country failed - ${error}`);
  }
};
