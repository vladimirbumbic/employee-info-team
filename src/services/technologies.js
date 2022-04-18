import apiInstance from './axios';

export const addTechnology = async (technology) => {
  try {
    const response = await apiInstance.post('api/technologies/', {
      name: technology,
    });
    return response;
  } catch (error) {
    console.log(`Adding technology failed - ${error}`);
  }
};

export const getTechnologies = async () => {
  try {
    const response = await apiInstance.get('api/technologies/');
    return response;
  } catch (error) {
    console.log(`Adding technology failed - ${error}`);
  }
};

export const deleteTechnology = async (technologyId) => {
  try {
    const response = await apiInstance.delete(
      `api/technologies/${technologyId}`,
    );
    return response;
  } catch (error) {
    console.log(`Delete technology failed - ${error}`);
  }
};
