import React, { Component, Fragment } from 'react';
import Email from "./Email";
import "../styles/Landing.scss";

class Landing extends Component {
    render() {
        return (
            <Fragment>
                <div className='container main-body'>
                    <Email />
                </div>
            </Fragment>
        )
    }
}

export default Landing;
