import React, { Component } from 'react';
import "../../styles/Email.scss";

import './CallToAction.scss'
import Footer from '../Footer';
import { Element } from 'react-scroll';

class CallToAction extends Component {
    render() {
        return (
            <Element name='listen' className='page-section sub-section'>
        <div className='call-to-action-container'>
            <div className='iframe-container'>
                <iframe src="https://open.spotify.com/embed/track/45q74mP57nDkU7Wjetk3ak" width="400" height="480" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
            </div>
            <div className='flex flex-center input-container'>
                <a className="mdc-button mdc-button--raised" href='https://www.smarturl.it/the-conspiracy' target='_blank'>
                    <span className="mdc-button__label">stream the conspiracy</span>
                </a>
            </div>
        </div>
        </Element>
        )
    }
}

export default CallToAction;
