import apiInstance from './axios';

export const getAllEmployees = async () => {
  try {
    const response = await apiInstance.get('api/users');
    return response;
  } catch (error) {
    console.log(`Getting all employees failed - ${error}`);
  }
};
export const addEmployee = async (email, name, seniority, city, technology) => {
  try {
    const response = await apiInstance.post('api/users', {
      email: email,
      name: name,
      seniority: seniority,
      cityId: city,
      positionId: technology,
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

export const changeEmployeeData = async (
  email,
  name,
  role,
  seniority,
  city,
  technology,

  userId,
) => {
  try {
    const response = await apiInstance.put(`api/users/${userId}`, {
      email: email,
      name: name,
      role: role,
      seniority: seniority,
      cityId: city,
      positionId: technology,
    });
    console.log(response);
    return response;
  } catch (error) {
    console.log(`User creation failed - ${error}`);
  }
};
