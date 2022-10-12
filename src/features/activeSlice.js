import { createSlice } from "@reduxjs/toolkit";

export const activeSlice = createSlice({
  name: "active",
  initialState: {
    activePrimary: true,
    activePromotion: false,
    activeSocial: false,
  },
  reducers: {
    setPrimaryActive: (state) => {
      state.activePrimary = true;
      state.activePromotion = false;
      state.activeSocial = false;
    },
    setPromotionActive: (state) => {
      state.activePrimary = false;
      state.activePromotion = true;
      state.activeSocial = false;
    },
    setSocialActive: (state) => {
      state.activePrimary = false;
      state.activePromotion = false;
      state.activeSocial = true;
    },
  },
});

export const { setPrimaryActive, setPromotionActive, setSocialActive } =
  activeSlice.actions;

export const selectPrimaryActive = (state) => state.active.activePrimary;
export const selectPromotionActive = (state) => state.active.activePromotion;
export const selectSocialActive = (state) => state.active.activeSocial;
// export const selectOpenMail = (state) => state.mail.selectedMail;

export default activeSlice.reducer;
