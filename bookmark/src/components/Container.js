import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Categories from "./Categories";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2)
  }
}));

const Cards = () => {
  const classes = useStyles();

  return (
    <>
      <Paper className={classes.root}>
        <Categories />
      </Paper>
    </>
  );
};

export default Cards;
