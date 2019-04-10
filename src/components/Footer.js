import React, { Component } from "react";
import SocialIcons from './SocialIcons';
import "../styles/Footer.scss";

class Footer extends Component {
  render() {
    return (
      <footer>
        <SocialIcons />
        <p className='copyright'>Copyright 2019 - Rope and Ladder. All rights reserved</p>
      </footer>
    );
  }
}

export default Footer;
