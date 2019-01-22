import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from './components/Header'
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
          <Header />
          <Route path="/" exact component={Landing} />
          <Route path="/tour/" component={Tour} />
          <Route path="/store/" component={Store} />
          <Route path="/contact/" component={Contact} />
        </div>
      </Router>
    )
  }
}

export default App;
