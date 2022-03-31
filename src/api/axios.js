import axios from 'axios';

const baseURL = process.env.REACT_APP_API;

export const apiInstance = axios.create(
  {
    baseURL,
    timeout: 6000,
  },
  {
    headers: {
      'Content-Type': 'application/json',
    },
  },
);
