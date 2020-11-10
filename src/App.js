import React from "react";
import logo from "./logo.svg";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import thisislogin from "./components/login";
import Home from "./components/home";
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login" exact component={thisislogin}></Route>
        <Route path="/" exact component={Home}></Route>
        <Redirect to="/login" />
      </Switch>
    </Router>
  );
}

export default App;
