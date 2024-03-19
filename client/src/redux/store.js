import { configureStore } from "@reduxjs/toolkit"
import roomReducer from "./userSlice"

export const store =configureStore({
  reducer:{
      room :roomReducer,
  }
})
