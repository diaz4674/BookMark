import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "./components/Dashboard.js";
import Categories from "./components/Categories.js";
import Login from "./components/Login.js";
import SignUp from "./components/SignUp";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/signup" component={SignUp} />
          <Route path="/dashboard" component={Dashboard} />
          <Route
            path="/categories"
            render={props => <Categories {...props} />}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
