import { configureStore } from "@reduxjs/toolkit";
import roomReducer from "./userSlice";
import socketSlice from "./socketSlice";

export const store = configureStore({
  reducer: {
    room: roomReducer,
    Socket: socketSlice,
  },
});
