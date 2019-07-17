//Navbar that displays during the Onboarding process

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  // component CSS
  root: {
    flexGrow: 1
  },
  title: {
    color: "white",
    flexGrow: 1
  },
  navBar: {
    backgroundColor: "#ba78fe"
  },
  links: {
    textDecoration: "none"
  },
  buttons: {
    color: "white"
  }
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.navBar}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            BookMark
          </Typography>
          <Link to="/login" className={classes.links}>
            {/* Sends the user to the login screen */}
            <Button color="primary" className={classes.buttons}>
              Login
            </Button>
          </Link>
          <Link to="/signup" className={classes.links}>
            {/* Sends the user to the register page */}
            <Button color="inherent" className={classes.buttons}>
              Sign Up
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}
