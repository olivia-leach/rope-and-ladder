import React, { Component, Fragment } from 'react';
import Email from "./Email";
import "../styles/Landing.scss";
import Hero from '../album.png'
import Logo from '../logo.png'
import ComingSoon from '../comingsoon.png'

class Landing extends Component {
    render() {
        return (
            <Fragment>
                <div className='container main-body'>
                    <div className='landing-container'>
                        <div className='flex flex-center'>
                            <img src={Logo} className='logo' />
                        </div>
                        <div className='flex flex-center'>
                            <img src={ComingSoon} className='coming-soon' />
                        </div>
                        <div className='flex flex-center'>
                            <img className="landing album-art" src={Hero} />
                        </div>
                        <Email />
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default Landing;
