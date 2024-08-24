import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import apiClient from '../../configs/api';

interface ItemsState {
  items: any[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: ItemsState = {
  items: [],
  status: 'idle',
  error: null,
};

export const fetchItems = createAsyncThunk(
  'items/fetchItems',
  async (_, { getState }) => {
    const state: any = getState();
    const token = state.auth.token;
    // const response = await axios.get(ITEMS_URL, {
    //   headers: { Authorization: `Bearer ${token}` },
    // });
    const response = await apiClient.get("/", {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data; // Trả về danh sách vật phẩm
  }
);

const itemsSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchItems.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchItems.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchItems.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || null;
      });
  },
});

export default itemsSlice.reducer;
