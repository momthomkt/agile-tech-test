import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
  accessToken: string | null;
  isAuthenticated: boolean;
}

const initialState: AuthState = {
  accessToken: null,
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginSuccess: (state, action: PayloadAction<string>) => {
      state.accessToken = action.payload;
      state.isAuthenticated = true;
      console.log("vao dc: ", state.isAuthenticated)
    },
    logout: (state) => {
      state.accessToken = null;
      state.isAuthenticated = false;
    },
    refreshTokenSuccess: (state, action: PayloadAction<string>) => {
      state.accessToken = action.payload;
    }
  }
});

export const { loginSuccess, logout, refreshTokenSuccess } = authSlice.actions;

export default authSlice.reducer;
