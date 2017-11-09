import React, { Component } from 'react';
import { connect } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Discover from './components/Discover'
import Catalog from './components/Catalog'
import Profile from './components/Profile'
import Header from './components/Header'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Switch>
            <Route exact path="/" component={Discover} />
            <Route exact path="/catalog/:id" component={Catalog} />
            <Route exact path="/profile" component={Profile} />
          </Switch>        
        </div>
      </Router>
    );
  }
}

export default connect((state)=> state)(App)
