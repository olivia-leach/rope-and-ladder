import React, { Component } from 'react';
import { Router, Route, Redirect } from "react-router-dom";
import { createBrowserHistory } from "history"
import { ParallaxProvider } from 'react-scroll-parallax';

import Header from './components/Header/Header'
import Landing from './components/Landing'
import Footer from './components/Footer';

import './App.scss';
import About from './components/About/About';
import Store from './components/Store/Store';
import CallToAction from './components/CallToAction/CallToAction';

const history = createBrowserHistory()

class App extends Component {
  render() {
    return (
      <Router basename='/' history={history}>
        <ParallaxProvider>
          <div className="App mdc-typography">
            <Header />
            <Route path='/' component={Landing} />
            <Redirect from="*" to='/' />
            <div className='sub-pages-container'>
              <Store />
              <About />
              <CallToAction />
              <Footer />
            </div>
          </div>
        </ParallaxProvider>
      </Router>
    )
  }
}

export default App;
