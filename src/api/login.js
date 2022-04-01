import { apiInstance } from './axios';
import history from '../components/CustomRouter/history';

const login = async () => {
  let response;
  try {
    response = await apiInstance.get('auth/google');
    console.log(response);
  } catch (err) {
    console.error(err);
  }

  if (response?.status === 200) {
    localStorage.setItem('token', response.data.token);
    localStorage.setItem('role', response.data.role);

    const role = localStorage.getItem('role');

    if (role === 'SYSTEM_ADMIN') {
      history.push('/maincontent');
    }

    if (role === null) {
      console.log('prikazu welcome user komponentu');
    }
  }
};

export default login;
