//Component that contains the images that display in the Welcome Component

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardMedia from "@material-ui/core/CardMedia";
import moneyLogo from '../../images/moneyLogo.png'
import shoppingLogo from '../../images/shoppingLogo.png'
import crownLogo from '../../images/crownLogo.png'

import "../../styles.css";

const useStyles = makeStyles(theme => ({
  //Component CSS
  cardsContainer: {
    display: "flex",
    justifyContent: "space-around",
    flexWrap: "wrap",
    width: "100%"
  },
  moneyCard: {
    minWidth: 275,
    backgroundColor: "#47d26b",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: "10px"
  },

  button: {
    backgroundColor: "white",
    "&:hover": {
      backgroundColor: "#9471e9",
      color: "white"
    }
  },
  shoppingCard: {
    minWidth: 275,
    backgroundColor: "pink",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: "10px"
  },
  personalCard: {
    minWidth: 275,
    backgroundColor: "#add2ec",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: "10px"
  },
  mediaContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%"
  },
  media: {
    margin: "0 auto",
    height: 140,
    width: "50.6%",
    borderRadius: "0%",
    ["@media (max-width:780px)"]: {
      height: 100,
      width: "36%"
    }
  },
  title: {
    fontSize: 14
  },
  text: {
    color: "white",
    margin: "0 auto"
  }
}));

const Categories = props => {
  const classes = useStyles();

  return (
    <div>
      <div>
        <CardContent className={classes.cardsContainer}>
          <Card className={classes.moneyCard}>
            <CardContent className={classes.mediaContainer}>
              <CardMedia
                className={classes.media}
                image={moneyLogo}
                title="Money"
              />
              <Typography variant="h5" component="h2" className={classes.text}>
                Financial
              </Typography>
            </CardContent>
          </Card>
          <Card className={classes.shoppingCard}>
            <CardContent className={classes.mediaContainer}>
              <CardMedia
                className={classes.media}
                image= {shoppingLogo}
                title="shopping"
              />
              <Typography variant="h5" component="h2" className={classes.text}>
                Shopping
              </Typography>
            </CardContent>
          </Card>
          <Card className={classes.personalCard}>
            <CardContent className={classes.mediaContainer}>
              <CardMedia
                className={classes.media}
                image= {crownLogo}
                title="shopping"
              />
              <Typography variant="h5" component="h2" className={classes.text}>
                Personal
              </Typography>
            </CardContent>
          </Card>
        </CardContent>
      </div>
    </div>
  );
};

export default Categories;
