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
  personalCard: {
    height: "auto"
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
        <CardContent className={classes.personalCard}>
          {!personalStatus ? (
            <h1>no</h1>
          ) : (
            state.map((personal, i) => {
              return (
                <div key={i}>
                  <h1>
                    {" "}
                    <a href={personal.personalSite} target="_blank">
                      {personal.personalName}
                    </a>
                  </h1>
                </div>
              );
            })
          )}
        </CardContent>
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
