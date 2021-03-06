import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import Categories from "./Categories";
import OnboardNav from "../Navbars/OnboardNav";

const useStyles = makeStyles(theme => ({
  //Component CSS
  welcomeContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: "25px auto"
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
  link: {
    textDecoration: "none"
  },
  nextButton: {
    backgroundColor: "#ba78fe",
    color: "white",
    "&:hover": {
      backgroundColor: "#9a37ff"
    }
  }
}));

const Welcome = props => {
  const classes = useStyles();

  return (
    <>
      <OnboardNav />
      <div className={classes.welcomeContainer}>
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
              <Link to="/financialSelect" className={classes.link}>
                <Button
                  variant="contained"
                  size="medium"
                  className={classes.nextButton}
                >
                  Next
                </Button>
              </Link>
            </CardActions>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default Welcome;
