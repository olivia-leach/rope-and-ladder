import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import { createBrowserHistory } from "history"

import Header from './components/Header/Header'
import Footer from './components/Footer'
import Landing from './components/Landing'
import Store from './components/Store/Store'
import Contact from './components/Contact'
import Tour from "./components/Tour";
import NotFound from "./components/NotFound";
import './App.scss';

const history = createBrowserHistory()

class App extends Component {
  render() {
    return (
      <Router basename='/' history={history}>
        <div className="App mdc-typography main-body">
          <div className='lines' />
          <Header />
          <Landing />
          <div className='other-pages-container'>
            <Switch>
              <Route path="/" exact component={Landing} />
              <Route path="/store" exact component={Store} />
              <Route path="*" component={NotFound} />
              {/*<Route render={() => <Redirect to="/" />} />*/}
            </Switch>
          </div>
        </div>
      </Router>
    )
  }
}

export default App;
