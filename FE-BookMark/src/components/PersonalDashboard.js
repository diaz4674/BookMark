import React, { useEffect, useState } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { makeStyles } from "@material-ui/core/styles";
import CardMedia from "@material-ui/core/CardMedia";
import { connect } from "react-redux";
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
  title: {
    display: "flex",
    justifyContent: "center",
    fontFamily: "Roboto Slab, serif",
    fontWeight: "bold",
    fontSize: "2em",
    margin: "25px"
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
    borderLeft: "solid 10px #fff80d",
    padding: "10px 15px",
    width: "90%",
    transition: ".4s",
    "&:hover": {
      borderLeft: " solid 10px #c6c22e"
    }
  },
  personalCard: {
    height: "auto",
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap"
  },
  optionsContainer: {
    margin: "20px"
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
    <div>
      <Card
        className={
          !personalStatus ? classes.containerLoading : classes.containerLoaded
        }
      >
          <div className={classes.top}>
            <span className={classes.title}>Personal Bookmarks</span>

            <CardMedia
              className={classes.media}
              image="data:image/png;base64,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"
              title="Money"
            />
          </div>
        <CardContent className={classes.personalCard}>
        {state.map((personal, i) => {
          return (
            <div key={i}>
              <div className = {classes.optionsContainer}> 
                <a
                  href={personal.personalSite}
                  target="_blank"
                  className={classes.links}
                >
                  <span className={classes.names}>{personal.personalName}</span>
                </a>
              </div>
            </div>
          );
        })}
        </CardContent>
      </Card>
    </div>
  );
};

const mapStateToProps = state => {

};

export default connect(
  mapStateToProps,

)(PersonalDashboard);
