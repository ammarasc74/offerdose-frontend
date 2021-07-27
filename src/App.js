import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./screens/Home";

function App() {
  return (
    <>
      <Router>
        {/* <Home /> */}
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" exact component={Home} />
          <Route path="/signup" exact component={Home} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
