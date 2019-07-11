import React, { useEffect, useState } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { getmyFinancials } from "../actions";
import axios from "axios";

const useStyles = makeStyles(theme => ({
  categoryContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: "100%",
    width: "100%"
  },
  cardContainer: {
    margin: "25px auto",
    width: "80%",

    ["@media (max-width:780px)"]: {
      height: "95%",
      overflow: "visible",
      marginTop: "20px"
    }
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
      boxShadow: " 2.5px 3.5px #888888"
    }
  },
  names: {
    color: "black",
    borderLeft: "solid 10px #ba78fe",
    padding: "10px 15px",
    width: "90%",
    transition: ".4s",
    "&:hover": {
      borderLeft: " solid 10px #9a37ff"
    }
  }
}));

const PersonalDashboard = props => {
  const classes = useStyles();
  const [state, setState] = useState([]);
  const [personalStatus, setPersonal] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const deconstructedToken = token.split(".")[1];
    const deconstructedUserID = JSON.parse(window.atob(deconstructedToken));
    let id = deconstructedUserID.id;

    const headers = { authorization: localStorage.getItem("token") };

    axios
      .get(`https://be-bookmark.herokuapp.com/getUserPersonal/${id}`, {
        headers
      })
      .then(res => {
        setState(res.data);
      })
      .catch(err => console.log(err));
  }, []);

  useEffect(() => {
    setPersonal(true);
  }, [state]);

  return (
    <div className={classes.categoryContainer}>
      <Card className={classes.cardContainer}>
        {state.map((personal, i) => {
          return (
            <div key={i}>
              <CardContent>
                <a
                  href={personal.personalSite}
                  target="_blank"
                  className={classes.links}
                >
                  <span className={classes.names}>{personal.personalName}</span>
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
)(PersonalDashboard);
