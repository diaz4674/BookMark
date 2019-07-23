import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import highFive from "../images/highFive.png";

const useStyles = makeStyles({
  //Component CSS
  card: {
    minWidth: 275,
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  pos: {
    marginBottom: 12
  },
  img: {
    width: "25rem",
    margin: "25px auto",
    display: "flex"
  },
  center: {
    display: "flex",
    justifyContent: "center"
  }
});

export default function SimpleCard() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.card}>
      <CardContent>
        <h2 className={classes.center}>
          Successfully Added Sites to your Dashboards!
        </h2>
        <img src={highFive} className={classes.img} />
        <h4 className={classes.center}>
          You can now view them when you browse your categories.
        </h4>
      </CardContent>
    </Card>
  );
}
