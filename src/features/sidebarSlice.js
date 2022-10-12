import { createSlice } from "@reduxjs/toolkit";

export const sidebarSlice = createSlice({
  name: "sidebar",
  initialState: {
    prev: "Inbox",
  },
  reducers: {
    setClickActive: (state, action) => {
      state.prev = action.payload;
    },
  },
});

export const { setClickActive } = sidebarSlice.actions;

export const selectSidebarPrev = (state) => state.sidebar.prev;

export default sidebarSlice.reducer;
