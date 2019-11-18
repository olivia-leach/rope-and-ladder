import React, { Component, Fragment } from "react";
import { Element } from 'react-scroll'
import AboutTheBand from '../../about_the_band.png'
import './About.scss'
import { Parallax } from "react-scroll-parallax";

class About extends Component {
  render() {
    return (
      <Element name='about'>
        <div className='fixed-banner'>
          <Parallax y={[-100, -40]}>
            <img src={AboutTheBand} alt='band' />
          </Parallax>
        </div>
        <div className='page-section sub-section'>
          <div className="about">
              <div className='about-wrapper'>
                  <div className='section-header'>About the Band</div>
                      <p>Rope and Ladder is the title of the band and rock opera created by Jay Clark, with his writing partner Ryan Dolen.</p>
                      <p>The project has been more than 10 years in the making⁠—in that time, Jay and Ryan pieced together a narrative of epic scope steeped in intrigues of war, love, and betrayal.</p>
                      <p>The album balances delicate piano melodies and classical string voices against distorted guitars and heavy drums, all of which drives the palpable and building tension that accompanies the rising stakes of the plotline.</p>
              </div>
          </div>
        </div>
      </Element>
    );
  }
}

export default About
