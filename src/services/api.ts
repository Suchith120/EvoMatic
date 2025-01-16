import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add token to requests if available
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// export const auth = {
//   register: (data: { name: string; email: string; password: string }) =>
//     api.post('/auth/register', data),
//   login: (data: { email: string; password: string }) =>
//     api.post('/auth/login', data),
// };
export const auth = {
  register: (data: { name: string; email: string; password: string }) => {
    console.log('Register payload:', data);
    return api.post('/auth/register', data);
  },
  login: (data: { email: string; password: string }) => {
    console.log('Login payload:', data);
    return api.post('/auth/login', data);
  },
};


export default api;