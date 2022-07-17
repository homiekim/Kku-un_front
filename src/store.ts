import { configureStore } from '@reduxjs/toolkit';
import rootReducer from 'reducer';

const devMode = process.env.NODE_ENV === 'development';

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware(),
  devTools: devMode,
});

export type AppDispatch = typeof store.dispatch;
export default store;
