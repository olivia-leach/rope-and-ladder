import React, { Component } from 'react';

import "../styles/Landing.scss";
import Hero from '../album-sm-2.png'
import { Element } from 'react-scroll';
import Email from './Email/Email';
import { Parallax } from 'react-scroll-parallax';
import ButtonLink from './ButtonLink/ButtonLink.tsx';

class Landing extends Component {
    render() {
        return (
            <Element name='home'>
                <div className='container main-body page-section'>
                    <div className='lines' role='img' aria-label='band music rock opera rope and ladder' />
                    <div className='landing-container'>
                        <div className='coming-soon-text'>
                            album available now
                        </div>
                        <Parallax y={[20, -20]} className='album-art-container'>
                            <img className="landing album-art" src={Hero} alt='Rope and Ladder: A Rock Opera, band music album art' />
                        </Parallax>
                        <div className='button-action-container'>
                            <ButtonLink link="http://found.ee/thrice_store" label='purchase' icon='fa fa-shopping-cart' />
                            <ButtonLink link="https://ffm.to/palms_pre-save" label='save' icon='fab fa-spotify' />
                        </div>
                        <Email />
                    </div>
                </div>
            </Element>
        )
    }
}

export default Landing;
