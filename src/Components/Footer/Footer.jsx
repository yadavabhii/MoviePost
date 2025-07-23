import React from 'react'
import './Footer.css'
import youtube_icon from '../assets/youtube_icon.png'
import twitter_icon from '../assets/twitter_icon.png'
import instagram_icon from '../assets/instagram_icon.png'
import facebook_icon from '../assets/facebook_icon.png'

const Footer = () => {
  return (
    <div className='footer'>

      <div className="social-media-icons">
        <a href="/facebook"><img src={youtube_icon} alt="Youtube" /></a>
        <a href="/twitter"><img src={facebook_icon} alt="Facebook" /></a>
        <a href="/twitter"><img src={twitter_icon} alt="Twitter" /></a>
        <a href="/instagram"><img src={instagram_icon} alt="Instagram" /></a>
      </div>
      <ul className='footer-links'>
        <li><a href="/terms">Terms of Use</a></li>
        <li><a href="/privacy">Privacy Policy</a></li>
        <li><a href="/gift-cards">Gift Cards</a></li>
        <li><a href="/help">Help Center</a></li>
        <li><a href="/contact">Contact Us</a></li>
        <li><a href="/faq">FAQ</a></li>
        <li><a href="/privacy">Privacy Policy</a></li>
        <li><a href="/media">Media Center</a></li>
        <li><a href="/cookie">Cookie Preferences</a></li>
        <li><a href="/corporate">Corporate Information</a></li>
        <li><a href="/speed">Speed Test</a></li>
        <li><a href="/legal">Legal Notices</a></li>
      </ul>
      <p>&copy; 2025 Netflix Clone. All rights reserved.</p>
      <div className="footer-logo">
        {/* <img src={logo} alt="Netflix Clone" /> */}
      </div>
      <p>Created by Abhii</p>
    </div>
  )
}

export default Footer
