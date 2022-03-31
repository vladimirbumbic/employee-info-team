import axios from 'axios';
import { apiInstance } from './axios';

const login = async () => {
  try {
    const data = await apiInstance.get('auth/google');
    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
  }
};

export default login;
