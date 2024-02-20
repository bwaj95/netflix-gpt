import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { TMDB_FETCH_OPTIONS } from "./constants";

const initialState = {
  nowPlayingMovies: {
    movies: null,
    status: "idle", // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,
  },
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
  extraReducers: (builder) => {
    builder
      .addCase(fetchNowPlayingMovies.pending, (state, action) => {
        state.nowPlayingMovies.status = "loading";
      })
      .addCase(fetchNowPlayingMovies.fulfilled, (state, action) => {
        state.nowPlayingMovies.status = "succeeded";

        const data = action.payload;
        state.nowPlayingMovies.movies = data.results;
      })
      .addCase(fetchNowPlayingMovies.rejected, (state, action) => {
        state.nowPlayingMovies.status = "failed";

        const error = action.payload;

        state.nowPlayingMovies.error = error;
      });
  },
});

export const fetchNowPlayingMovies = createAsyncThunk(
  "movies/fetchNowPlayingMovies",
  async () => {
    try {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
        TMDB_FETCH_OPTIONS
      );

      const data = await response.json();

      return data;
    } catch (error) {
      return error;
    }
  }
);

export const selectNowPlayingMovies = (state) => state.movies.nowPlayingMovies;

export const {
  addNowPlayingMovies,
  addTrailerData,
  addPopularMovies,
  addTopRatedMovies,
  addUpcomingMovies,
  removeMovieSliceData,
} = moviesSlice.actions;

export default moviesSlice.reducer;
