import axios from 'axios';

let baseURL = 'http://localhost:5000';
export const backendClient = axios.create(
  {
    baseURL,
    timeout: 6000,
  },
  {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true,
      'Content-Type': 'application/json',
    },
  },
);
