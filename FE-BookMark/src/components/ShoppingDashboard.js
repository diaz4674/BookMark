import React, { useEffect, useState } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { getmyFinancials } from "../actions";
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
  names: {
    color: "black",
    borderLeft: "solid 10px #58e2c8",
    padding: "10px 15px",
    width: "90%",
    transition: ".4s",
    "&:hover": {
      borderLeft: " solid 10px #02b492"
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
