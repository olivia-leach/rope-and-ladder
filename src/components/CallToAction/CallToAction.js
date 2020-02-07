import React, { Component } from 'react';
import { Element } from 'react-scroll';

import './CallToAction.scss'

class CallToAction extends Component {
    render() {
        return (
            <Element name='listen' className='page-section sub-section'>
                <div className='call-to-action-container'>
                    <div className='section-header'>Listen</div>
                    <div className='iframe-container'>
                        <iframe title='play rope and ladder music' src="https://open.spotify.com/embed/track/45q74mP57nDkU7Wjetk3ak" width="400" height="480" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                    </div>
                    <div className='flex flex-center input-container'>
                        <a className="mdc-button mdc-button--raised" href='https://www.smarturl.it/the-conspiracy' target='_blank' rel='noopener noreferrer'>
                            <span className="mdc-button__label">stream the conspiracy</span>
                        </a>
                    </div>
                </div>
            </Element>
        )
    }
}

export default CallToAction;
