import React, { useState } from 'react'
import './Navbar.css'
import logo from '../assets/logo.png'
import search_icon from '../assets/search_icon.svg'
import bell_icon from '../assets/bell_icon.svg'
import profile_img from '../assets/profile_img.png'
import caret_icon from '../assets/caret_icon.svg'
import { Link } from 'react-router-dom';


const Navbar = () => {

  const [menu, setmenu] = useState("home");
  return (
    <div className='navbar'>
      <div className="navbar-left">
        <Link to="/"><img src={logo} alt="Netflix Clone" className='netflix-logo' /></Link>
        <ul>
          <li onClick={() => setmenu("home")}>
            <Link style={{ textDecoration: "none", color: "#fff" }}
              to="/">Home
            </Link>
            {menu === "home" && <hr />}
          </li>
          <li onClick={() => setmenu("tv-shows")}>
            <Link style={{ textDecoration: "none", color: "#fff" }}
              to="/tv-shows">TV Shows
            </Link>
            {menu === "tv-shows" && <hr />}
          </li>
          <li onClick={() => setmenu("movies")}>
            <Link style={{ textDecoration: "none", color: "#fff" }}
              to="/movies">Movies
            </Link>
            {menu === "movies" && <hr />}
          </li>
          <li onClick={() => setmenu("my-list")}>
            <Link style={{ textDecoration: "none", color: "#fff" }}
              to="/my-list">My List
            </Link>
            {menu === "my-list" && <hr />}
          </li>
          <li onClick={() => setmenu("latest")}>
            <Link style={{ textDecoration: "none", color: "#fff" }}
              to="/latest">Latest
            </Link>
            {menu === "latest" && <hr />}
          </li>
          <li onClick={() => setmenu("popular")}>
            <Link style={{ textDecoration: "none", color: "#fff" }}
              to="/popular">Popular
            </Link>
            {menu === "popular" && <hr />}
          </li>
        </ul>
      </div>
      <div className="navbar-right">
        <img src={search_icon} alt="Search" className='icons' />
        <p>Children</p>
        <img src={bell_icon} alt="Notifications" className='icons' />
        <div className="navbar-profile">
          <img src={profile_img} alt="Profile" className='profile' />
          <img src={caret_icon} alt="Dropdown" className='icons' />
          {/**** Dropdown menu for profile options ***/}
          <div className="profile-dropdown">
            <ul>
              <li>Account</li>
              <li>Settings</li>
              <li>Help</li>
              <li>Sign Out</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
