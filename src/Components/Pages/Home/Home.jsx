import hero_banner from '../../assets/hero_banner.jpg';
import './Home.css';
import Navbar from '../../Navbar/Navbar';
import hero_title from '../../assets/hero_title.png';
import play_icon from '../../assets/play_icon.png';
import info_icon from '../../assets/info_icon.png';
import TitleCards from '../../TitleCards/TitleCards';
import Footer from '../../Footer/Footer';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { fetchMultipleMovieLists } from '../../Store/MovieSlice';


const Home = () => {
  const [showVideo, setShowVideo] = useState(false);
  const dispatch = useDispatch()
  const movieSearchTerms = useSelector((state) => state.movies.movieSearchTerms)

  useEffect(() => {
    dispatch(fetchMultipleMovieLists())
  }, [dispatch]);


  useEffect(() => {
    const timer = setTimeout(() => {
      setShowVideo(true);
    }, 2000); // Show video after 2 seconds
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className='home'>
      <Navbar />
      <div className="home-content">
        {!showVideo && (
          <img
            src={hero_banner}
            alt="Hero Banner"
            className="hero-banner"
          />
        )}
        {showVideo && (
          <iframe
            width="100%"
            height="500"
            src="https://www.youtube.com/embed/80dqOwAOhbo?autoplay=1&start=2"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="hero-video"
            controls autoPlay
          ></iframe>
        )}
        <div className={`hero-caption ${showVideo ? 'fade-out' : ''}`}>
          <img src={hero_title} alt="Hero Title" className='caption-img' />
          <p className='caption-text'>
            Watch the latest movies and TV shows on Netflix Clone. Enjoy a wide range of genres and exclusive content.
          </p>
          <div className='hero-buttons'>
            <button className='play-button'>
              <img src={play_icon} alt="Play Icon" /> <span>Play</span>
            </button>
            <button className='info-button'>
              <img src={info_icon} alt="Info Icon" /> More Info
            </button>
          </div>
        </div>
      </div>
      {/* <TitleCards /> */}
      <div className="multiple-cards">
        <div className="multiple-cards">
          {movieSearchTerms.map((item, index) => (
            <TitleCards key={index} categoryKey={item.key} title={item.title} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
















// import React, { useContext, useEffect, useState } from 'react';
// import { movieContextdata } from '../../Context/MovieContext';
// import { movieContextdata } from '../../Context/MovieContext';
// const { movieSearchTerms } = useContext(movieContextdata)