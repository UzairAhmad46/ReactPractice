import React from 'react';
import './Footer.css';
import youtubeIcon from '../../assets/youtube_icon.png';
import twitter_icon from '../../assets/twitter_icon.png';
import instagram from '../../assets/instagram_icon.png';
import facebook_icon from '../../assets/facebook_icon.png';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-icon">
        <img src={facebook_icon} alt="" />
        <img src={instagram} alt="" />
        <img src={twitter_icon} alt="" />
        <img src={youtubeIcon} alt="" />
      </div>
      <ul>
        <li>Audio Description</li>
        <li>Help Center</li>
        <li>Gift Cards</li>
        <li>Media Center</li>
        <li>Investor Relation </li>
        <li>Jobs</li>
        <li>Terms of Use </li>
        <li>Privacy</li>
        <li>Legal Notice</li>
        <li>Cookie Preference</li>
        <li>Corporate Information </li>
        <li>Contact Us</li>
      </ul>
      <p className="copyright-text"> © 1997-2024 Netflix , Inc</p>
    </div>
  );
};
export default Footer;
