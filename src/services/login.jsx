// import axios from 'axios';
import { backendClient } from './http';

const login = async () => {
  try {
    const loginResponse = await backendClient.get('/auth/google');

    console.log(loginResponse);
    return loginResponse;
  } catch (err) {
    console.log(`${err}`);
  }
};

export default login;
