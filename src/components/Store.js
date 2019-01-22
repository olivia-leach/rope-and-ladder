import React, { Component, Fragment } from "react";
import "../styles/Store.scss";

class Store extends Component {
  render() {
    return (
        <Fragment>
          <div className='hero store' />
          <div className="center-container tour">
            <h1 className="mdc-typography--headline4">
              Store
                      </h1>
            <h2 className="mdc-typography--headline5">
              Coming soon
                      </h2>
          </div>
        </Fragment>
    );
  }
}

export default Store;
