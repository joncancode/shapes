import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

const Circle = () => {
  return (
    <div>
      <svg height="200" width="200">
        <circle cx="50" cy="50" r="40" />
      </svg>
    </div>
  );
};

const Square = () => {
  return (
    <div>
      <svg height="200" width="200">
        <rect width="50" height="50" />
      </svg>
    </div>
  );
};

const NotFound = () => {
  return (
    <div>
      <h1>404: Page Not Found</h1>
    </div>
  );
};

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
        <Switch>
          <Route
            exact
            path="/"
            render={() => <Redirect to="/shapes/circles" />}
          />

          <Route exact path="/shapes/circles" component={Circle} />

          <Route exact path="/shapes/squares" component={Square} />

          <Route exact path="*" component={NotFound} />
          </Switch>
          
        </div>
      </Router>
    );
  }
}

export default App;
