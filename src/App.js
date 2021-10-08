import React, { Component } from "react";
import { Route, Switch } from 'react-router-dom'
import Header from './components/Header';
import Main from "./components/Main";
import About from "./components/About";
import Contact from "./components/Contact";
import Projects from "./components/Projects";


class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Switch>
          <Route exact path="/" render={ (props) => (<Main {...props} key="main" />) }/>
          <Route path="/about" component={ About }/>
          <Route path="/contact" component={ Contact }/>
          <Route path="/projects" component={ Projects }/>
        </Switch>
      </>
    );
  }
}

export default App;