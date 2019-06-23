import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "./components/Dashboard.js";
import FinancialCard from "./components/FinancialCard.js";
import Login from "./components/Login.js";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
        <Route exact path="/login" component={Login} />
          <Route exact path="/" component={Dashboard} />
          <Route
            exact
            path="/financial"
            render={props => <FinancialCard {...props} />}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
