// import axios from 'axios';
// import  store  from '../app/store';
// import { refreshToken } from './authService';

// const api = axios.create({
//   baseURL: `${process.env.REACT_APP_API_URL}`,
//   withCredentials: true, // Bật để gửi cookie cùng với các yêu cầu
// });

// api.interceptors.request.use(
//   (config) => {
//     const state = store.getState();
//     const token = state.auth.accessToken;
//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
//   },
//   (error) => Promise.reject(error)
// );

// api.interceptors.response.use(
//   (response) => response,
//   async (error) => {
//     const originalRequest = error.config;
//     if (error.response.status === 401 && !originalRequest._retry) {
//       originalRequest._retry = true;
//       const prevState = store.getState();
//       const refresh_token = prevState.auth.refreshToken;
//       await store.dispatch(refreshToken(refresh_token));
//       const state = store.getState();
//       originalRequest.headers.Authorization = `Bearer ${state.auth.accessToken}`;
//       return api(originalRequest);
//     }
//     return Promise.reject(error);
//   }
// );

// export default api;

/////////////////////////////////
import axios from 'axios';
import store from '../app/store';
import { refreshToken, logoutUser } from './authService';
import { useLogout } from '../hooks/useLogout';

const api = axios.create({
  baseURL: `${process.env.REACT_APP_API_URL}`,
  headers: {
    'Content-Type': 'application/json',
  },
  // withCredentials: true, // Bật để gửi cookie cùng với các yêu cầu
});

// Interceptor cho request để thêm accessToken vào header Authorization
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

// Interceptor cho response để xử lý lỗi 401(Unauthorized)
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    // Kiểm tra nếu lỗi 401(Unauthorized) và chưa thử làm mới token
    // if (error.response.status === 401 && !originalRequest._retry) {
    if (error.response && error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      const prevState = store.getState();
      const refresh_token = prevState.auth.refreshToken;

      try {
        // Thử làm mới accessToken
        await store.dispatch(refreshToken(refresh_token));
        const state = store.getState();

        originalRequest.headers.Authorization = `Bearer ${state.auth.accessToken}`;

        // Gửi lại request với accessToken mới
        return api(originalRequest);
      } catch (refreshError) {
        // store.dispatch(logoutUser())
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
    
  }
);

export default api;


