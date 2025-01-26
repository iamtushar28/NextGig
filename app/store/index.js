import { configureStore } from '@reduxjs/toolkit';
import fullscreenReducer from './fullscreenSlice';

const store = configureStore({
  reducer: {
    fullscreen: fullscreenReducer,
  },
});

export default store;
