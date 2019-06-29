import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Categories from "./Categories";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2)
  }
}));

const Container = () => {
  const classes = useStyles();

  return (
    <>
      <Paper className={classes.root}>{/* <Categories /> */}</Paper>
    </>
  );
};

export default Container;
