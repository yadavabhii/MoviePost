
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovieDetails } from "../../Store/MovieSlice";
import { useParams } from "react-router-dom";
import "./Player.css";

const Player = () => {
  const { id } = useParams(); //  Get ID from URL
  const dispatch = useDispatch();
  const selectedMovie = useSelector((state) => state.movies.selectedMovie);
  const status = useSelector((state) => state.movies.status);

  useEffect(() => {
    if (id) {
      dispatch(fetchMovieDetails(id)); //  Fetch movie detail on load
    }
  }, [dispatch, id]);

  return (
    <div className="player">
      {status === "loading" || !selectedMovie ? (
        <div className="loading-container">
          <div className="loading-spinner"></div>
        </div>
      ) : (
        <>
          <h1>{selectedMovie.Title}</h1>
          <img src={selectedMovie.Poster} alt={selectedMovie.Title} className="player-poster" />
          <p><strong>Year:</strong> {selectedMovie.Year}</p>
          <p><strong>Genre:</strong> {selectedMovie.Genre}</p>
          <p><strong>Plot:</strong> {selectedMovie.Plot}</p>
          <p><strong>Director:</strong> {selectedMovie.Director}</p>
          <p><strong>Actors:</strong> {selectedMovie.Actors}</p>
          <p><strong>IMDB Rating:</strong> {selectedMovie.imdbRating}</p>
        </>
      )}
    </div>
  );
};

export default Player;







// import React, { useContext } from "react";
// const { selectedMovie } = useContext(movieContextdata);
// import { movieContextdata } from "../../Context/MovieContext";