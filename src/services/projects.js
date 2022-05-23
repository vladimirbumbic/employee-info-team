import apiInstance from './axios';

export const getAllProjects = async () => {
  try {
    const response = await apiInstance.get(`api/projects`);
    return response;
  } catch (error) {
    console.log(`Getting projects failed - ${error}`);
  }
};

export const addProject = async (project, projectManagerId) => {
  try {
    const response = await apiInstance.post('api/projects/', {
      name: project,
      projectManagerId: projectManagerId,
      //   projectUsers: projectUsers,
    });
    return response;
  } catch (error) {
    console.log(`Adding project failed - ${error}`);
  }
};

export const deleteProject = async (projectId) => {
  try {
    const response = await apiInstance.delete(`api/projects/${projectId}`);
    return response;
  } catch (error) {
    console.log(`Delete project failed - ${error}`);
  }
};
