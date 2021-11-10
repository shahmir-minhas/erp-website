import React, { Component } from 'react';
import "./App.css";
import "antd/dist/antd.css";
import { Switch, Route, Redirect } from 'react-router-dom';
import Index from './Pages/Dashboard/index';


function App() {
  return <React.Fragment>
  <Switch>
    <Route path="/" component={Index}/>
  </Switch>
  
  </React.Fragment>;
}

export default App;
