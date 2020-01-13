import React, { Component } from 'react';

import "../styles/Landing.scss";
import Hero from '../album-sm-2.png'
import { Element } from 'react-scroll';
import Email from './Email/Email';
import { Parallax } from 'react-scroll-parallax';

class Landing extends Component {
    render() {
        return (
            <Element name='home'>
                <div className='container main-body page-section'>
                    <div className='lines' role='img' aria-label='band music rock opera rope and ladder' />
                    <div className='landing-container'>
                        <Parallax y={[20, -20]} className='album-art-container'>
                            <img className="landing album-art" src={Hero} alt='Rope and Ladder: A Rock Opera, band music album art' />
                        </Parallax>
                        <Email />
                    </div>
                </div>
            </Element>
        )
    }
}

export default Landing;
