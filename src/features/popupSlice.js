/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  popupContent: null,
};

const popupSlice = createSlice({
  name: "popup",
  initialState,
  reducers: {
    popupController: (state, action) => {
      state.popupContent = action.payload;
    },
  },
});

export const { popupController } = popupSlice.actions;

export default popupSlice.reducer;
