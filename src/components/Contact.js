import React, { Component, Fragment } from "react";
import '../styles/Contact.scss';

class Contact extends Component {
    render() {
        return (
            <Fragment>
            <div className="hero contact" />
            <div className="center-container">
            <div className="flex contact-wrapper">
              <div>
                <h2 className="mdc-typography--headline5">
                    General Manager
                </h2>
                <p className="mdc-typography--body1">
                    <a href="mailto:jay@ropeandladder.com">Jay Clark</a>
                </p>
              </div>
              <div>
                <h2 className="mdc-typography--headline5">Press</h2>
                <p className="mdc-typography--body1">
                    <a href="mailto:andrew@ropeandladder.com">
                    Andrew Hollingworth
                    </a>
                </p>
              </div>
              <div>
                <h2 className="mdc-typography--headline5">Booking Agent</h2>
                <p className="mdc-typography--body1">
                    <a href="mailto:ryan@ropeandladder.com">
                    Ryan Dolen
                    </a>
                </p>
              </div>
            </div>
          </div>
        </Fragment>
        )
    }
}

export default Contact;
