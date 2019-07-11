import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  title: {
    color: "black",
    flexGrow: 1
  },
  navBar: {
    backgroundColor: "white"
  },
  buttons: {
    textDecoration: "none"
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
          <Link to="/" className={classes.buttons}>
            <Button color="primary">Login</Button>
          </Link>
          <Link to="/signup" className={classes.buttons}>
            <Button color="primary">Sign Up</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}
