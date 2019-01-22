import React, { Component, Fragment } from "react";
import "../styles/Tour.scss";

class Tour extends Component {
    render() {
        return (
            <Fragment>
                <div className="hero tour" />
                <div className="center-container tour">
                    <h1 className="mdc-typography--headline4">
                        Tour Dates
                     </h1>
                    <h2 className="mdc-typography--headline5">
                        Coming soon
                    </h2>
                </div>
            </Fragment>
        );
    }
}

export default Tour;
