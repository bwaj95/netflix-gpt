import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showGptSearch: false,
  movieNames: null,
  movieResults: null,
};

const gptSlice = createSlice({
  name: "gpt",
  initialState,
  reducers: {
    toggleGptSearch: (state) => {
      state.showGptSearch = !state.showGptSearch;
    },
    addGptMovieResult: (state, action) => {
      const { movieNames, movieResults } = action.payload;

      state.movieNames = movieNames;
      state.movieResults = movieResults;
    },
    removeGptSliceData: (state) => {
      return initialState;
    },
  },
});

export const { toggleGptSearch, addGptMovieResult, removeGptSliceData } =
  gptSlice.actions;

export default gptSlice.reducer;
