import React, { Component } from "react";
import Footer from "../Footer";

import './About.scss'

class About extends Component {
  render() {
    return (
        <div className="about other-page">
            <div className='about-wrapper'>
                <div className='about-header'>About the Band</div>
                    <p>Rope and Ladder is the title of the band and rock opera created by Jay Clark, with his writing partner Ryan Dolen.</p>
                    <p>The project has been more than 10 years in the making⁠—in that time, Jay and Ryan pieced together a narrative of epic scope steeped in intrigues of war, love, and betrayal.</p>
                    <p>The album balances delicate piano melodies and classical string voices against distorted guitars and heavy drums, all of which drives the palpable and building tension that accompanies the rising stakes of the plotline.</p>
            </div>
          <Footer />
        </div>
    );
  }
}

export default About
