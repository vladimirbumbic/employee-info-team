import axios from 'axios';

const baseURL = process.env.REACT_APP_API;

export const apiInstance = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default apiInstance;
