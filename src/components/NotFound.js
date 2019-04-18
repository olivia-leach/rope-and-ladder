import React, { Component, Fragment } from 'react';
import Email from "./Email";
import "../styles/Landing.scss";
import Hero from '../album-sm-2.png'
import Logo from '../logo.png'
import ComingSoon from '../comingsoon2.png'

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
                            Page Not Found
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default Landing;
