/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  popupContent: null,
  popupSub: null,
};

const popupSlice = createSlice({
  name: "popup",
  initialState,
  reducers: {
    popupController: (state, action) => {
      state.popupContent = action.payload;
    },
    popupSubController: (state, action) => {
      state.popupSub = action.payload;
    },
  },
});

export const { popupController, popupSubController } = popupSlice.actions;

export default popupSlice.reducer;
