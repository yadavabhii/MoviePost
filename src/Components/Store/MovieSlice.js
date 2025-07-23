import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
// const API_KEY = '5d8301c6';

const movieSearchTerms = [
  { title: "Money Heist", key: "money heist" },
  { title: "Avengers Collection", key: "avengers" },
  { title: "Batman Saga", key: "batman" },
  { title: "Spiderman Series", key: "spiderman" },
  { title: "Joker & Crime", key: "joker" },
  { title: "Iron Man Legacy", key: "iron man" },
]

// Fetch single movie details

export const fetchMovieDetails = createAsyncThunk(
  "movies/fetchMovieDetails",
  async (id) => {
    const response = await axios.get(`https://www.omdbapi.com/?i=${id}&apikey=5d8301c6`);
    return response.data;
  }
);

// Fetch all categories

export const fetchMultipleMovieLists = createAsyncThunk(
  'movies/fetchMultipleMovieLists',
  async () => {
    const result = {};

    for (const term of movieSearchTerms) {
      try {
        const res = await axios.get(`https://www.omdbapi.com/?s=${term.key}&apikey=5d8301c6`);
        const shortList = res.data.Search || [];

        const fullDetailsList = await Promise.all(
          shortList.map(async (movie) => {
            const res = await axios.get(`https://www.omdbapi.com/?i=${movie.imdbID}&apikey=5d8301c6`);
            return res.data;
          })
        );
        result[term.key] = fullDetailsList;

      } catch (error) {
        console.error(`Error fetching ${term.key}`, error);
        result[term.key] = [];
      }
    }

    return result;
  }
);

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    moviesByCategory: {},
    selectedMovie: null,
    movieSearchTerms,
    status: 'idle',
    error: null,
  },
  reducers: {
    clearSelectedMovie(state) {
      state.selectedMovie = null;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovieDetails.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchMovieDetails.fulfilled, (state, action) => {
        state.selectedMovie = action.payload;
        state.status = 'succeeded';
      })
      .addCase(fetchMovieDetails.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(fetchMultipleMovieLists.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchMultipleMovieLists.fulfilled, (state, action) => {
        state.moviesByCategory = action.payload;
        state.status = 'succeeded';
      })
      .addCase(fetchMultipleMovieLists.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

export const { clearSelectedMovie } = movieSlice.actions;
export default movieSlice.reducer;
