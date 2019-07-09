import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "./components/Dashboard.js";
import Categories from "./components/Onboarding/Categories.js";
import Login from "./components/Login.js";
import SignUp from "./components/Onboarding/SignUp";
import FinancialCard from "./components/Onboarding/FinancialCard";
import ShoppingCard from "./components/Onboarding/ShoppingCard";
import PersonalCard from "./components/Onboarding/PersonalCard";
import Welcome from "./components/Onboarding/welcome";
import onboardNav from "./components/Navbars/OnboardNav";
import FinancialDashboard from "./components/FinancialDashboard";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/signup" component={SignUp} />
          <Route path="/welcome" component={Welcome} />
          <Route path="/financialSelect" component={FinancialCard} />
          <Route path="/shoppingSelect" component={ShoppingCard} />
          <Route path="/personalSelect" component={PersonalCard} />
          <Route path="/financialCard" component={FinancialDashboard} />
          <Route
            path="/categories"
            render={props => <Categories {...props} />}
          />
          <Route exact path="/" component={Login} />

          <Route path="/dashboard" component={Dashboard} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
