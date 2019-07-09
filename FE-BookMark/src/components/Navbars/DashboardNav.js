import React from "react";
import { Link } from "react-router-dom";

const DashboardNav = props => {
  return (
    <nav className="nav-bar">
      <div className="container">
        <ul className="logo-nav-link">
          {/* <li><img src = {Logo} width = "45em" alt = "Logo"/> </li> */}
          <li className="nav-title">
            <Link to="/">Friend Finder</Link>
          </li>
        </ul>
        <ul className="nav-links">
          <li>
            <Link to="/friend-requests">Requests</Link>
          </li>
          <li>
            <Link to="/friends">Friends</Link>
          </li>
          <li>
            <Link to="/profiles">Profiles</Link>
          </li>
          <li>
            <Link to="/signup">SignUp</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default DashboardNav;
