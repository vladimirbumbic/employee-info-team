import { configure } from '@testing-library/react';
import axios from 'axios';

const baseURL = process.env.REACT_APP_API;

const apiInstance = axios.create({
  baseURL,
  headers: {
    Accept: 'application/json',
  },
});

apiInstance.interceptors.request.use(
  (request) => {
    let { token } = JSON.parse(localStorage.getItem('loginData'));

    if (token) {
      request.headers = {
        Authorization: `Bearer ${token}`,
      };
    }
    return request;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export default apiInstance;
