import axios from 'axios';
// import router from './router';

axios.defaults.baseURL = 'http://localhost';
axios.defaults.withCredentials = true;

// axios.interceptors.response.use(res => res, async error => {
//   if(error) {
//     if(error.response.status === 401 && !error.config._retry) {
//       error.config._retry = true;
//       return router.push('/login');
//     }
//   }
// });
