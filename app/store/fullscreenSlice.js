import { createSlice } from '@reduxjs/toolkit';

const fullscreenSlice = createSlice({
  name: 'fullscreen',
  initialState: {
    isFullScreen: false, // Initial fullscreen mode
  },
  reducers: {
    toggleFullScreen: (state) => {
      state.isFullScreen = !state.isFullScreen; // Toggle the state
    },
  },
});

export const { toggleFullScreen } = fullscreenSlice.actions;

export default fullscreenSlice.reducer;
