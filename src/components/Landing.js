import React, { Component } from 'react';

import "../styles/Landing.scss";
import Hero from '../album-sm-2.png'
import ComingSoon from '../jan2020.png'
import Logo from '../logo.png'
import { Element } from 'react-scroll';
import Email from './Email';
import { Parallax } from 'react-scroll-parallax';

class Landing extends Component {
    render() {
        return (
            <Element name='home'>
                <div className='container main-body page-section'>
                <div className='lines' />
                    <div className='landing-container'>
                    <div className='header-logo-container'>
                    <img src={Logo} className='logo' alt='logo' />
                  </div>
                        <div className='flex flex-center'>
                            <img src={ComingSoon} className='coming-soon' />
                        </div>
                        <div className='flex flex-center'>
                            <Parallax y={[20, -20]} className='album-art-container'>
                                <img className="landing album-art" src={Hero} />
                            </Parallax>
                        </div>
                    </div>
                </div>
                <Email />
            </Element>
        )
    }
}

export default Landing;
