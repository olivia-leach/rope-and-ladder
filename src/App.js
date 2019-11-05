import React, { Component } from 'react';
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history"

import Header from './components/Header/Header'
import Landing from './components/Landing'
import Store from './components/Store/Store'
import About from "./components/About/About";
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
              <Route path="/" exact component={Landing} history={history} />
              <Route path="/store" exact component={Store} />
              <Route path="/about" exact component={About} />
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
