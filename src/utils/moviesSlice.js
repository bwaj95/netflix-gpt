import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  nowPlayingMovies: null,
  popularMovies: null,
  topRatedMovies: null,
  upcomingMovies: null,
  trailer: null,
};

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload.slice(0, 8);
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload.slice(0, 8);
    },
    addTopRatedMovies: (state, action) => {
      state.topRatedMovies = action.payload.slice(0, 8);
    },
    addUpcomingMovies: (state, action) => {
      state.upcomingMovies = action.payload.slice(0, 8);
    },
    addTrailerData: (state, action) => {
      state.trailer = action.payload;
    },
  },
});

export const {
  addNowPlayingMovies,
  addTrailerData,
  addPopularMovies,
  addTopRatedMovies,
  addUpcomingMovies,
} = moviesSlice.actions;

export default moviesSlice.reducer;
