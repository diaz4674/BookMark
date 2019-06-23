import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar.js";
import FinancialCard from "./components/FinancialCard.js";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Navbar} />
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
