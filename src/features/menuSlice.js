import { createSlice } from "@reduxjs/toolkit";

export const menuSlice = createSlice({
  name: "menu",
  initialState: { menuCondensed: false },
  reducers: {
    condenseMenu: (state) => {
      state.menuCondensed = !state.menuCondensed;
    },
  },
});

export const { condenseMenu } = menuSlice.actions;

export const selectCondenseMenu = (state) => state.menu.menuCondensed;

export default menuSlice.reducer;
