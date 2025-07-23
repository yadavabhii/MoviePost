import { configureStore } from '@reduxjs/toolkit'
import moviesReducer from "../Store/MovieSlice";

const store = configureStore({
  reducer: {
    movies: moviesReducer
  }
})

export default store;

