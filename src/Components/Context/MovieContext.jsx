// import { createContext, useEffect, useState } from 'react';
// import { useLocation } from 'react-router-dom';

// const movieContextdata = createContext(null);

// const MovieContextProvider = ({ children }) => {
//   const [moviesByCategory, setMoviesByCategory] = useState({});
//   const [selectedMovie, setSelectedMovie] = useState(null);
//   const location = useLocation();

//   const movieSearchTerms = [
//     { title: "Avengers Collection", key: "avengers" },
//     { title: "Batman Saga", key: "batman" },
//     { title: "Spiderman Series", key: "spiderman" },
//     { title: "Joker & Crime", key: "joker" },
//     { title: "Iron Man Legacy", key: "iron man" },
//   ];

//   const fetchMovieDetailsByID = async (id) => {
//     const res = await fetch(`https://www.omdbapi.com/?i=${id}&apikey=5d8301c6`);
//     const data = await res.json();
//     return data;
//   };

//   const fetchMultipleMovieLists = async () => {
//     const result = {};

//     for (const term of movieSearchTerms) {
//       try {
//         const res = await fetch(`https://www.omdbapi.com/?s=${term.key}&apikey=5d8301c6`);
//         const data = await res.json();
//         const shortList = data.Search || [];

//         const fullDetailsList = await Promise.all(
//           shortList.map((movie) => fetchMovieDetailsByID(movie.imdbID))
//         );

//         result[term.key] = fullDetailsList;
//       } catch (error) {
//         console.error(`Error fetching ${term.key}`, error);
//         result[term.key] = [];
//       }
//     }
//     setMoviesByCategory(result);
//   };

//   const fetchMovieDetails = async (id) => {
//     try {
//       const res = await fetch(`https://www.omdbapi.com/?i=${id}&apikey=5d8301c6`);
//       const data = await res.json();
//       setSelectedMovie(data);
//     } catch (error) {
//       console.error("Error fetching selected movie:", error);
//       setSelectedMovie(null);
//     }
//   };

//   useEffect(() => {
//     if (location.pathname.includes('/player/')) {
//       const id = location.pathname.split('/player/')[1];
//       fetchMovieDetails(id);
//     } else {
//       setSelectedMovie(null);
//     }
//   }, [location]);

//   useEffect(() => {
//     fetchMultipleMovieLists();
//   }, []);

//   return (
//     <movieContextdata.Provider value={{ moviesByCategory, selectedMovie, movieSearchTerms }}>
//       {children}
//     </movieContextdata.Provider>
//   );
// };

// export { movieContextdata, MovieContextProvider };
