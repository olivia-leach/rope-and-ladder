import React, { Component } from "react";
import SocialIcons from './SocialIcons';
import "../styles/Footer.scss";

class Footer extends Component {
  render() {
    return (
      <footer>
        <SocialIcons />
      </footer>
    );
  }
}

export default Footer;
