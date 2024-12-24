import axios from 'axios';
const axiosInstance = axios.create({
  baseURL: "http://localhost:3001/",
  timeout: 10000,
});


// axiosInstance.interceptors.request.use(
//   (config) => {
 
//     const token = localStorage.getItem('authToken'); 
//     if (token) {
//       config.headers['Authorization'] = `Bearer ${token}`;
//     }
//     config.headers['Content-Type'] = 'application/json';

//     return config;
//   },
//   (error) => {
//     console.error('Request error:', error);
//     return Promise.reject(error);
//   }
// );


// axiosInstance.interceptors.response.use(
//   (response) => {
//     return response;
//   },
//   (error) => {
//     if (error.response) {
//       if (error.response.status === 401) {
//         alert('Session expired. Please log in again.');
//         window.location.href = '/login';
//       }
//     } else if (error.request) {
//       console.error('No response received:', error.request);
//     } else {
//       console.error('Error setting up request:', error.message);
//     }
//     return Promise.reject(error);
//   }
// );

export default axiosInstance;
