import axios from 'axios';
import { NavigateFunction } from 'react-router-dom';
import { toast } from "react-toastify";

import apiClient from '../configs/api';
import URL_API_CONST from '../constants/URL_API_const';
import URL_CONST from '../constants/URL_const';
import { AppDispatch } from '../app/store';
import { loginSuccess, logout, refreshTokenSuccess } from '../features/auth/authSlice';


// const API_URL = 'https://yourapi.com';

// export const login = (username: string) => async (dispatch: AppDispatch) => {
//   try {
//     const response = await apiClient.post(`${URL_API_CONST.AUTH.LOGIN}`, { username }, { withCredentials: true });
//     const { accessToken } = response.data;

//     // Lưu access token vào Redux store (bộ nhớ tạm thời)
//     dispatch(loginSuccess(accessToken));
//   } catch (error) {
//     console.error('Login failed:', error);
//     // Handle login error
//   }
// };

export const login = (username: string, navigate : NavigateFunction) => async (dispatch: AppDispatch) => {
  try {
    const response = await apiClient.post(`${URL_API_CONST.AUTH.LOGIN}`, { username });
    const { accessToken, refreshToken } = response.data;

    // Save accessToken, refreshToken in Redux store
    dispatch(loginSuccess({ accessToken, refreshToken }));
    navigate(URL_CONST.HOME);
    toast.success('Login successfully!', { theme: "colored" })
    // Lưu refreshToken trong một HTTP-Only cookie từ phía BE
    // document.cookie = `refreshToken=${refreshToken}; HttpOnly; Secure; SameSite=Strict`;
    // Lưu refreshToken trong cookie client-side
    // document.cookie = `refreshToken=${refreshToken}; Secure; SameSite=Strict; Path=/; Max-Age=2592000`;
  } catch (error) {
    toast.error('Unauthorized', { theme: "colored" })
  }
};

export const logoutUser = () => (dispatch: AppDispatch) => {
  dispatch(logout());
};

function getCookie(name: string): string | null {
  const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
  if (match) return match[2];
  return null;
}

export const refreshToken = (refresh_token: string | null) => async (dispatch: AppDispatch) => {
  try {

    if (!refreshToken) {
      throw new Error('No refresh token found');
    }

    const response = await apiClient.post(`${URL_API_CONST.AUTH.REFRESH_TOKEN}`, { refreshToken }, { withCredentials: true });

    const { accessToken, refreshToken: newRefreshToken } = response.data;

    dispatch(refreshTokenSuccess({ accessToken, refreshToken: newRefreshToken }));

    // Cập nhật refreshToken trong HTTP-Only cookie
    // document.cookie = `refreshToken=${newRefreshToken}; HttpOnly; Secure; SameSite=Strict`;
  } catch (error) {
    console.error('Refresh token failed:', error);
    dispatch(logout());
  }
};

// export const refreshToken = () => async (dispatch: AppDispatch) => {
//   try {
//     const response = await apiClient.post(`${URL_API_CONST.AUTH.REFRESH_TOKEN}`, { refreshToken }, { withCredentials: true });
//     const { accessToken, refreshToken } = response.data;

//     // Cập nhật accessToken mới trong Redux store
//     dispatch(refreshTokenSuccess(accessToken));

//     // Cập nhật refreshToken trong HTTP-Only cookie
//     document.cookie = `refreshToken=${refreshToken}; HttpOnly; Secure; SameSite=Strict`;
//   } catch (error) {
//     console.error('Refresh token failed:', error);
//     dispatch(logout());
//   }
// };


