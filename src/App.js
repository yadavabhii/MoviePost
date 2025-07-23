
import Home from './Components/Pages/Home/Home';
import { Route, Routes } from 'react-router-dom';
import Login from './Components/Pages/Login/Login';
import Player from './Components/Pages/Player/Player';
import Navbar from './Components/Navbar/Navbar';
import TvShows from './Components/TvShows/TvShows';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/tv-shows' element={<TvShows />} />
        <Route path='/movies' element={<div>Movies Page</div>} />
        <Route path='/my-list' element={<div>My List Page</div>} />
        <Route path='/latest' element={<div>Latest Page</div>} />
        <Route path='/popular' element={<div>Popular Page</div>} />
        <Route path='/login' element={<Login />} />
        <Route path="/player/:id" element={<Player />} />
        <Route path='/search' element={<div>Search Page</div>} />
        <Route path='/profile' element={<div>Profile Page</div>} />
        <Route path='/settings' element={<div>Settings Page</div>} />
      </Routes>
      {/* <Home /> */}
    </div>
  );
}
export default App;
