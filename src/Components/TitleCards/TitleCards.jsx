import './TitleCards.css'
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchMultipleMovieLists } from "../Store/MovieSlice";

const TitleCards = ({ category, categoryKey, title }) => {

  const dispatch = useDispatch();

  const { moviesByCategory, status } = useSelector((state) => state.movies);
  console.log(moviesByCategory);


  const categoryValue = category || categoryKey; // fallback support
  const movies = moviesByCategory[categoryValue] || [];

  useEffect(() => {
    dispatch(fetchMultipleMovieLists());
  }, [dispatch]);


  return (
    <div className='titlecards'>
      <h2>{title}</h2>
      {status === 'loading' ? (
        <p>Loading...</p>
      ) : movies.length === 0 ? (
        <p>No movies available for this category.</p>
      ) : (
        <div className="cards-container">
          {movies.map((movie, index) => (
            <div className="card" key={index}>
              <Link to={`/player/${movie.imdbID}`} onClick={() => window.scrollTo(0, 0)}>
                <img src={movie.Poster} alt={movie.Title} />
              </Link>
              <p>{movie.Title}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TitleCards;



















// import  { useEffect, useState } from 'react';
// import { useContext } from 'react'
// import { useContext } from 'react';
// import { movieContextdata } from '../Context/MovieContext'
// const { moviesByCategory } = useContext(movieContextdata);
// const movies = moviesByCategory[categoryKey] || [];


// const [movies, setMovies] = useState([]);

// useEffect(() => {
//   const fetchMovies = async () => {
//     const res = await fetch("https://www.omdbapi.com/?s=avengers&apikey=5d8301c6");
//     const data = await res.json();
//     setMovies(data.Search || []); // set empty array if Search doesn't exist
//   };
//   fetchMovies();
// }, []);
