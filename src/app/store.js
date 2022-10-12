import { configureStore } from "@reduxjs/toolkit";
import mailReducer from "../features/mailSlice";
import userReducer from "../features/userSlice";
import activeReducer from "../features/activeSlice";
import counterReducer from "../features/counterSlice";
import menuReducer from "../features/menuSlice";
import sidebarReducer from "../features/sidebarSlice";
import errorReducer from "../features/errorSlice";

export const store = configureStore({
  reducer: {
    mail: mailReducer,
    user: userReducer,
    active: activeReducer,
    counter: counterReducer,
    menu: menuReducer,
    sidebar: sidebarReducer,
    error: errorReducer,
  },
});
