import { createSlice } from "@reduxjs/toolkit";

export const errorSlice = createSlice({
  name: "error",
  initialState: { errorMessageIsOpen: false },
  reducers: {
    openErrorMessage: (state) => {
      state.errorMessageIsOpen = true;
    },
    closeErrorMessage: (state) => {
      state.errorMessageIsOpen = false;
    },
  },
});

export const { openErrorMessage, closeErrorMessage } = errorSlice.actions;

export const selectErrorMessageIsOpen = (state) =>
  state.error.errorMessageIsOpen;

export default errorSlice.reducer;
