import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    isMenuOpen: false,
  },
  reducers: {
    toggleOptionMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
    closeOptionMenu: (state) => {
      state.isMenuOpen = false;
    },
  },
});

export const { toggleOptionMenu, closeOptionMenu } = appSlice.actions;
export default appSlice.reducer;
