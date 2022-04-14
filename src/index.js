import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import apiInstance from '../src/services/axios';

// apiInstance.interceptors.request.use(
//   (config) => {
//     if (window.localStorage.getItem('token')) {
//       config.headers.Authorization = `Bearer ${window.localStorage.getItem(
//         'token',
//       )}`;
//     }
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   },
// );

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
