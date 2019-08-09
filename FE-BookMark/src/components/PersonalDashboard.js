import React, { useEffect, useState } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { makeStyles } from "@material-ui/core/styles";
import CardMedia from "@material-ui/core/CardMedia";
import { connect } from "react-redux";
import pokeCrown from "../images/pokeCrown.png";
import axios from "axios";
import { getTokenId } from "./common/UserId";

const useStyles = makeStyles(theme => ({
  // Component CSS
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

  //Component States
  const [state, setState] = useState([]);
  const [personalStatus, setPersonal] = useState(false);

  useEffect(() => {
    //Deconstructs the token to get the user id
    let id = getTokenId();

    //sets the token to the headers
    const headers = { authorization: localStorage.getItem("token") };

    axios
      //sends GET request with the headers to authenticate and retrieve the user's Personal Sites data
      .get(`https://be-bookmark.herokuapp.com/getUserPersonal/${id}`, {
        headers
      })
      .then(res => {
        //sets the user's personal data to the state
        setState(res.data);
      })
      .catch(err => console.log(err));
  }, []);

  useEffect(() => {
    //when the state changes, it sets personalStatus to true, which then toggles the className of the component to have a fade effect when rendering
    setPersonal(true);
  }, [state]);

  return (
    <div>
      <Card
        className={
          //checks to see if true, and if true, renders compnent with a fade effect
          !personalStatus ? classes.containerLoading : classes.containerLoaded
        }
      >
        <div className={classes.top}>
          <span className={classes.title}>Personal Bookmarks</span>

          <CardMedia
            className={classes.media}
            image={pokeCrown}
            title="Crown"
          />
        </div>
        <CardContent className={classes.personalCard}>
          {state.map((personal, i) => {
            return (
              <div key={i}>
                <div className={classes.optionsContainer}>
                  <a
                    href={personal.personalSite}
                    target="_blank"
                    className={classes.links}
                  >
                    <span className={classes.names}>
                      {personal.personalName}
                    </span>
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

const mapStateToProps = state => {};

export default connect(mapStateToProps)(PersonalDashboard);
