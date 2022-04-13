import axios from 'axios';

const baseURL = process.env.REACT_APP_API;

export const apiInstance = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

apiInstance.interceptors.request.use(
  (request) => {
    let { token } = JSON.parse(localStorage.getItem('loginData'));

    console.log('radi intercepstor za request');
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

// apiInstance.interceptors.request.use(
//   (request) => {
//     let {token} = JSON.parse(localStorage.getItem('loginData'))
//     if(token) {
//       request.headers = {
//         Authorization: `Bearer ${token}`,
//       }
//       return request
//     }

//   }
// )

export default apiInstance;
