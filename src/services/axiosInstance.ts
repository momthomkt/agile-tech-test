import axios from 'axios';
import  store  from '../app/store';
import { refreshToken } from './authService';

const api = axios.create({
  baseURL: 'https://yourapi.com',
  withCredentials: true, // Bật để gửi cookie cùng với các yêu cầu
});

api.interceptors.request.use(
  (config) => {
    const state = store.getState();
    const token = state.auth.accessToken;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      await store.dispatch(refreshToken());
      const state = store.getState();
      originalRequest.headers.Authorization = `Bearer ${state.auth.accessToken}`;
      return api(originalRequest);
    }
    return Promise.reject(error);
  }
);

export default api;
