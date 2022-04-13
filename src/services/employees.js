import apiInstance from './axios';

export const getAllEmployees = async () => {
  try {
    const response = await apiInstance.get('api/users');
    return response;
  } catch (error) {
    console.log(`Getting all employees failed - ${error}`);
  }
};
export const addEmployee = async (email, name, seniority, city) => {
  try {
    console.log('AAAAAAAAAAAAAAA');
    console.log(email, name);
    const response = await apiInstance.post('api/users', {
      email: email,
      name: name,
      // seniority: seniority,
      // city: city,
      // photo: photo,
    });
    console.log(response);
    return response;
  } catch (error) {
    console.log(`User creation failed - ${error}`);
  }
};

export const deleteEmployee = async (userId) => {
  try {
    const response = await apiInstance.delete(`api/users/${userId}`);
    return response;
  } catch (error) {
    console.log(`Failed delete user - ${error}`);
  }
};
