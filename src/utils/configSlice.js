import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  lang: "en",
};

const configSlice = createSlice({
  name: "config",
  initialState,
  reducers: {
    changeLanguage: (state, action) => {
      state.lang = action.payload;
    },
    removeConfigSliceData: (state) => {
      return initialState;
    },
  },
});

export const { changeLanguage, removeConfigSliceData } = configSlice.actions;

export default configSlice.reducer;
