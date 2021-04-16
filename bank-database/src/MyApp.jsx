import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MainPage from "./pages/mainPage";
import QueryPage from "./pages/queryPage";

export default function MyApp() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" exact component={MainPage} />
          <Route exact path="/test" exact component={QueryPage} />
          
        </Switch>
      </Router>
    );
  }
  