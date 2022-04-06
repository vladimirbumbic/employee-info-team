import { apiInstance } from './axios';
import history from '../components/CustomRouter/history';

const login = async () => {
  window.localStorage.clear();
  let response;
  try {
    response = await apiInstance.get('auth/google');
    console.log(response);
    console.log(response.data.token);
  } catch (err) {
    console.error(err);
  }

  if (response.data.token !== undefined) {
    localStorage.setItem('token', response.data.token);
    localStorage.setItem('role', response.data.role);

    const role = localStorage.getItem('role');

    if (role === 'SYSTEM_ADMIN') {
      history.push('/maincontent');
    }

    if (role === 'null') {
      history.push('/welcomeUser');
    }
  } else {
    localStorage.setItem('token', false);
  }
};

export default login;
