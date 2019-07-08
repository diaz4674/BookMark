import React, { useState, useEffect } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import bookmark from "../images/bookmark.jpg";
import { Link } from "react-router-dom";
import Categories from "./Categories";

const useStyles = makeStyles(theme => ({
  welcomeContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#9471e9",
    height: "100%",
    width: "100%"
  },
  image: {
    margin: "0 auto",
    width: "50.6%",
    borderRadius: "0%"
  },
  title: {
    display: "flex",
    justifyContent: "center"
  },
  categoryContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#9471e9",
    height: "100%",
    width: "100%"
  },
  welcomeCard: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  media: {
    margin: "0 auto",
    height: 150,
    width: "50.6%",
    borderRadius: "0%",
    ["@media (max-width:780px)"]: {
      height: 100,
      width: "36%"
    }
  },
  heightClass: {
    paddingTop: "100px",
    width: "80%",
    ["@media (max-width:780px)"]: {
      height: "100%"
    }
  }
}));

const Welcome = props => {
  const classes = useStyles();

  return (
    <div className={classes.welcomeContainer}>
      <div className={classes.heightClass}>
        <Card className={classes.cardContainer}>
          <CardContent className={classes.welcomeCard}>
            <h1 className={classes.title}>Welcome!</h1>
            <Categories />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Let's get started
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                In order to set up your profile, your next steps will be to
                select or add your favorite sites to your profile.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" color="primary">
                <Link to="/financialSelect">Next </Link>
              </Button>
            </CardActions>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Welcome;
