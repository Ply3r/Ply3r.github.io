import React, { Component } from "react";
import { Route, Switch } from 'react-router-dom'
import Header from './components/Header';
import Main from "./components/Main";


class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Switch>
          <Route path="/" component={ Main }/>
        </Switch>
      </>
    );
  }
}

export default App;