import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./screens/Home";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/offerdose-frontend/" exact component={Home} />
          <Route path="/offerdose-frontend/login" exact component={Home} />
          <Route path="/offerdose-frontend/signup" exact component={Home} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
