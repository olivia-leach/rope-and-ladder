import React from 'react'
import { Element } from 'react-scroll'
import { Parallax } from 'react-scroll-parallax'

import '../styles/Landing.scss'
import Hero from '../album-sm-2.png'
import Email from './Email/Email'
import ButtonLink from './ButtonLink/ButtonLink'

const Landing = () => (
  <Element id="home" name="home">
    <div className="container main-body page-section">
      <div
        className="lines"
        role="img"
        aria-label="band music rock opera rope and ladder"
      />
      <div className="landing-container">
        <div className="coming-soon-text">album available now</div>
        <Parallax y={[20, -20]} className="album-art-container">
          <img
            className="landing album-art"
            src={Hero}
            alt="Rope and Ladder: A Rock Opera, band music album art"
          />
        </Parallax>
        <div className="button-action-container">
          <ButtonLink
            suppressNewPage
            link="/#store"
            label="purchase"
            icon="fa fa-shopping-cart"
          />
          <ButtonLink
            suppressNewPage
            link="/#listen"
            label="digital"
            icon="fab fa-spotify"
          />
        </div>
        <Email />
      </div>
    </div>
  </Element>
)

export default Landing
