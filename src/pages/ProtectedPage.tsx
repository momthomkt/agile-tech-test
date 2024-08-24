import React from 'react';
import { useDispatch } from 'react-redux';
import { logoutUser } from '../services/authService';
import api from '../services/axiosInstance';

import { AppDispatch } from '../app/store';

const ProtectedPage: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  const fetchProtectedData = async () => {
    try {
      const response = await api.get('/protected/data');
      console.log(response.data);
    } catch (error) {
      console.error('Failed to fetch protected data:', error);
    }
  };

  return (
    <div>
      <h2>Protected Page</h2>
      <p>This page is protected and only accessible if logged in.</p>
      <button onClick={fetchProtectedData}>Fetch Protected Data</button>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default ProtectedPage;
