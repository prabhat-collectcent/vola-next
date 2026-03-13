// import axios from 'axios';
// import { signOut, getSession } from 'next-auth/react';

// const api = axios.create({
//   baseURL: 'http://localhost:4000/api',
//   withCredentials: true, // ensure cookies are sent with requests
// });

// // Add a request interceptor
// api.interceptors.request.use(async (config) => {
//   const session = await getSession();
//   if (session?.accessToken) {
//     config.headers.Authorization = `Bearer ${session.accessToken}`;
//   }
//   return config;
// }, (error) => Promise.reject(error));

// // Add a response interceptor
// api.interceptors.response.use((response) => response, async (error) => {
//   const originalRequest = error.config;

//   if (error.response?.status === 401 && !originalRequest._retry) {
//     originalRequest._retry = true;

//     try {
//       // Try refreshing the token
//       const { data } = await axios.post('http://localhost:4000/api/auth/refresh-token', {}, { withCredentials: true });

//       if (data.accessToken) {
//         // Update session with the new access token
//         const session = await getSession();
//         session.accessToken = data.accessToken;

//         originalRequest.headers.Authorization = `Bearer ${data.accessToken}`;
//         return api(originalRequest);
//       }
//     } catch (refreshError) {
//       console.error('Refresh token expired, logging out...');
//       signOut();
//     }
//   }

//   return Promise.reject(error);
// });

// export default api;
