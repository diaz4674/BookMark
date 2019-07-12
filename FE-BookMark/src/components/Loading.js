import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  }
}));

export default function CircularIndeterminate() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <h1>Loading ...</h1>
      <img src="https://image.shutterstock.com/image-vector/little-panda-super-hero-flies-260nw-650591155.jpg" />
    </div>
  );
}
