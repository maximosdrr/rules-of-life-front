import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Login } from "./pages/login/index";
import { Home } from "./pages/home/index";
import { Register } from "./pages/register/index";

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Login></Login>
        </Route>
        <Route exact path="/home">
          <Home></Home>
        </Route>
        <Route exact path="/register">
          <Register></Register>
        </Route>
      </Switch>
    </Router>
  );
}
