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
      state.nowPlayingMovies = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addTopRatedMovies: (state, action) => {
      state.topRatedMovies = action.payload;
    },
    addUpcomingMovies: (state, action) => {
      state.upcomingMovies = action.payload;
    },
    addTrailerData: (state, action) => {
      state.trailer = action.payload;
    },
    removeMovieSliceData: (state) => {
      return initialState;
    },
  },
});

export const {
  addNowPlayingMovies,
  addTrailerData,
  addPopularMovies,
  addTopRatedMovies,
  addUpcomingMovies,
  removeMovieSliceData,
} = moviesSlice.actions;

export default moviesSlice.reducer;
