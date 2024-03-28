import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  conneted: false,
  roomId: "",
};

const roomSlice = createSlice({
  name: "currentRoom",
  initialState,
  reducers: {
    setConneted: (state, action) => {
      state.conneted = state.conneted;
      state.roomId = action.payload;
    },
  },
});

export const { setConneted } = roomSlice.actions;

export default roomSlice.reducer;
