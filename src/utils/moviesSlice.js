import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  nowPlayingMovies: null,
  trailer: null,
};

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addTrailerData: (state, action) => {
      state.trailer = action.payload;
    },
  },
});

export const { addNowPlayingMovies, addTrailerData } = moviesSlice.actions;

export default moviesSlice.reducer;
