import React from "react";
import SocialIcons from './SocialIcons';
import "../styles/Footer.scss";

const Footer = () => (
      <footer>
        <SocialIcons />
        <p className='copyright'>Copyright {new Date().getFullYear()} - Rope and Ladder. All rights reserved</p>
      </footer>
    )

export default Footer;
