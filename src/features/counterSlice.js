import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: { counter: 0 },
  reducers: {
    length: (state, action) => {
      state.counter = action.payload;
    },
  },
});

export const { length } = counterSlice.actions;

export const selectCounter = (state) => state.counter.counter;
// export const selectOpenMail = (state) => state.mail.selectedMail;

export default counterSlice.reducer;
