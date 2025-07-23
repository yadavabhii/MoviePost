// import React, { useContext } from 'react'
// import { movieContextdata } from '../Context/MovieContext';
// const { moviesByCategory } = useContext(movieContextdata);
// const movies = moviesByCategory[categoryKey] || [];
import "./TvShows.css"
import TitleCards from '../TitleCards/TitleCards'
import { useSelector } from "react-redux"

const TvShows = () => {
  const movieSearchTerms = useSelector((state) => state.movies.movieSearchTerms)

  return (
    <div className='tvshows-container'>
      <h1 className='tvshows-heading'>TvShows
        <hr />
      </h1>
      <div className='tvshows-cards'>
        {movieSearchTerms?.map((item, index) => (
          <TitleCards key={index} categoryKey={item.key} title={item.title} />
        ))}
      </div>
    </div>
  )
}

export default TvShows;
