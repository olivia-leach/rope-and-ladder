import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Header from './components/Header'
import Footer from './components/Footer'
import Landing from './components/Landing'
import Store from './components/Store'
import Contact from './components/Contact'
import Tour from "./components/Tour";
import './App.scss';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App mdc-typography main-body">
          <div className='lines' />
          <Header />
          <Switch>
            <Route path="/" exact component={Landing} />
            <Route render={() => <Redirect to="/" />} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;
