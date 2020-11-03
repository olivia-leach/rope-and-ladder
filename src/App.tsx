import React, { Component } from 'react';
import { Router, Route, Redirect, Switch } from "react-router-dom";
import { createBrowserHistory } from "history"
import { ParallaxProvider } from 'react-scroll-parallax';
import { ThemeProvider, createMuiTheme } from '@material-ui/core';

import Header from './components/Header/Header'
import Landing from './components/Landing'
import Footer from './components/Footer';
import EarlyAccess from './components/EarlyAccess/EarlyAccess';

import './App.scss';
import About from './components/About/About';
import Store from './components/Store/Store';
import CallToAction from './components/CallToAction/CallToAction';

const history = createBrowserHistory()

const materialTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#dd7d45',
    },
    secondary: {
      main: '#dd7d45',
    },
  }
})

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <ParallaxProvider>
          <ThemeProvider theme={materialTheme}>
            <div className="App mdc-typography" id='AppContainer'>
              <Switch>
                <Redirect from="/store" to={{ pathname: '/', hash: '#store' }} />
                <Redirect from="/about" to={{ pathname: '/', hash: '#about' }} />
                <Route path='/' component={Landing} />
                <Redirect from="*" to='/' />
              </Switch>
              <Route path='/earlyaccess' component={EarlyAccess} history={history} />
              <Header />
              <div className='sub-pages-container'>
                <Store />
                <About />
                <CallToAction />
                <Footer />
              </div>
            </div>
          </ThemeProvider>
        </ParallaxProvider>
      </Router>
    )
  }
}

export default App;
