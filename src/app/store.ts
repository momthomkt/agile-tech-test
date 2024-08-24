// import { configureStore } from '@reduxjs/toolkit';
// import authReducer from '../features/auth/authSlice';
// import itemsReducer from '../features/profile/itemsSlice';

// const store = configureStore({
//   reducer: {
//     auth: authReducer,
//     items: itemsReducer,
//   },
// });

// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;

// export default store
///////////////////////////////////////////////////////////////////
// import { configureStore } from '@reduxjs/toolkit';
// import authReducer from '../features/auth/authSlice';
// import itemsReducer from '../features/profile/itemsSlice';

// export const store = configureStore({
//   reducer: {
//     auth: authReducer,
//     items: itemsReducer,
//   },
// });

// // Infer the `RootState` and `AppDispatch` types from the store itself
// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;

// export default store

///////////////////////////////////////////////////////
import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // Sử dụng localStorage
import authReducer from '../features/auth/authSlice';
import itemsReducer from '../features/profile/itemsSlice';
import { combineReducers } from 'redux';

// Kết hợp các reducer
const rootReducer = combineReducers({
  auth: authReducer,
  items: itemsReducer,
});

// Cấu hình redux-persist
const persistConfig = {
  key: 'root',
  storage,
};

// Tạo persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Cấu hình store với middleware tùy chỉnh để bỏ qua kiểm tra non-serializable
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Bỏ qua các action redux-persist
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
      },
    }),
});

// Tạo persistor
export const persistor = persistStore(store);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;

