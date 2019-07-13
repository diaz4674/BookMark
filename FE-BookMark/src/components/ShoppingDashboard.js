import React, { useEffect, useState } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { getmyFinancials } from "../actions";
import CardMedia from "@material-ui/core/CardMedia";
import axios from "axios";

const useStyles = makeStyles(theme => ({
  containerLoading: {
    margin: "50px 0 0 0",
    opacity: 0
  },
  containerLoaded: {
    margin: "50px 0 0 0",
    transition: "opacity .9s ease-in",
    opacity: "1"
  },
  links: {
    display: "flex",
    justifyContent: "center",
    fontFamily: "Roboto Slab, serif",
    border: "solid .5px black",
    padding: "8px 5px",
    borderRadius: "5px",
    width: "200px",
    flexWrap: "wrap",
    boxShadow: " 2.5px 5px #888888",
    textDecoration: "none",
    transition: ".4s",
    "&:hover": {
      transform: "scale(1.1, 1.1)",
      boxShadow: " 5px 8px #888888"
    }
  },
  title: {
    display: "flex",
    justifyContent: "center",
    fontFamily: "Roboto Slab, serif",
    fontWeight: "bold",
    fontSize: "2em",
    margin: "25px"
  },
  names: {
    color: "black",
    borderLeft: "solid 10px #eb7575",
    padding: "10px 15px",
    width: "90%",
    transition: ".4s",
    "&:hover": {
      borderLeft: " solid 10px #d82e2e"
    }
  },
  media: {
    margin: "0 auto",
    height: 252,
    width: "18em",
    borderRadius: "0%",
    ["@media (max-width:780px)"]: {
      height: 141,
      width: "10em"
    }
  },
  shoppingCard: {
    height: "auto",
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap"
  }
}));

const ShoppingDashboard = props => {
  const classes = useStyles();
  const [state, setState] = useState([]);
  const [shoppingStatus, setShopping] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const deconstructedToken = token.split(".")[1];
    const deconstructedUserID = JSON.parse(window.atob(deconstructedToken));
    let id = deconstructedUserID.id;

    const headers = { authorization: localStorage.getItem("token") };

    axios
      .get(`https://be-bookmark.herokuapp.com/getUserShopping/${id}`, {
        headers
      })
      .then(res => {
        setState(res.data);
      })
      .catch(err => console.log(err));
  }, []);

  useEffect(() => {
    setShopping(true);
  }, [state]);

  return (
    <div>
      <Card
        className={
          !shoppingStatus ? classes.containerLoading : classes.containerLoaded
        }
      >

          <div className={classes.top}>
            <span className={classes.title}>Financial Bookmarks</span>

            <CardMedia
              className={classes.media}
              image="data:image/png;base64,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"
              title="Money"
            />
          </div>
        {state.map((stores, i) => {
          return (
            <div key={i}>
              <CardContent className={classes.shoppingCard}>
                <a
                  href={stores.storeSite}
                  target="_blank"
                  className={classes.links}
                >
                  <span className={classes.names}>{stores.storeName}</span>
                </a>
              </CardContent>
            </div>
          );
        })}
      </Card>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    test: state.test
  };
};

export default connect(
  mapStateToProps,
  { getmyFinancials }
)(ShoppingDashboard);
