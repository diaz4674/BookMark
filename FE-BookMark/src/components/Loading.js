import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  back: {
    width: "100%",
    height: "100%",
    backgroundColor: "red"
  }
}));

const Loading = props => {
  const classes = useStyles();
  return (
    <div className={classes.back}>
      <span className={classes.title}>HELLO</span>
    </div>
  );
};

export default Loading;
