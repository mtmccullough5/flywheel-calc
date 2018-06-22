import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import FlyBuild from './components/FlyBuild';
import FlyStats from './components/FlyStats';
import FlyTest from './components/FlyTest';

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' component={FlyBuild} />
          <Route exact path='/FlywheelStats' component={FlyStats} />
          <Route exact path='/FlywheelTest' component={FlyTest} />
        </Switch>
      </div>
    );
  }
}

export default App;
