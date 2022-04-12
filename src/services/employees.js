import apiInstance from './axios';

export const getAllEmployees = async () => {
  try {
    const response = await apiInstance.get('api/users');
    return response;
  } catch (error) {
    throw `Getting all employees failed - ${error}`;
  }
};
export const addEmployee = async (email, name, seniority, photo) => {
  try {
    const response = await apiInstance.post('api/users', {
      email: email,
      name: name,
      seniority: seniority,
      photo: photo,
    });
    return response;
  } catch (error) {
    throw `User creation failed - ${error}`;
  }
};
