import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type loginPayload = {
  accessToken: string | null
  refreshToken: string | null
}

type refreshTokenPayload = {
  accessToken: string | null
  refreshToken: string | null
}

interface AuthState {
  accessToken: string | null;
  refreshToken: string | null;
  isAuthenticated: boolean;
}

const initialState: AuthState = {
  accessToken: null,
  refreshToken: null,
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginSuccess: (state, action: PayloadAction<loginPayload>) => {
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.accessToken = null;
      state.refreshToken = null;
      state.isAuthenticated = false;
    },
    refreshTokenSuccess: (state, action: PayloadAction<refreshTokenPayload>) => {
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
      state.isAuthenticated = true;
    }
  }
});

export const { loginSuccess, logout, refreshTokenSuccess } = authSlice.actions;

export default authSlice.reducer;
