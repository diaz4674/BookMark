import React, { useEffect, useState } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import axios from "axios";
import CardMedia from "@material-ui/core/CardMedia";
import cashIcon from "../images/cashIcon.png";
import { getTokenId } from "./common/UserId";

const useStyles = makeStyles(theme => ({
  // Component CSS
  containerLoading: {
    margin: "50px 0 0 0",
    opacity: 0
  },
  containerLoaded: {
    margin: "50px 0 0 0",
    transition: "opacity 1s ease-in",
    opacity: "1"
  },
  loading: {
    marginTop: "200px",
    display: "flex",
    justifyContent: "center"
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
  bankCard: {
    height: "auto",
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap"
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
  optionsContainer: {
    margin: "20px"
  }
}));

const FinancialDashboard = props => {
  const classes = useStyles();

  //Component States
  const [state, setState] = useState([]);
  const [financialStatus, setFinancials] = useState(false);

  useEffect(() => {
    //Deconstructs the token to get the user id
    let id = getTokenId();

    //sets the token to the headers
    const headers = { authorization: localStorage.getItem("token") };

    axios
      //sends GET request with the headers to authenticate and retrieve the user's financial data
      .get(`https://be-bookmark.herokuapp.com/getUserFinancial/${id}`, {
        headers
      })
      .then(res => {
        //sets the user's financial data to the state
        setState(res.data);
      })
      .catch(err => console.log(err));
  }, []);

  useEffect(() => {
    // when the setFinancials are true, it adds CSS to the component to render with a fade in effect.
    setFinancials(true);
  }, [state]);

  return (
    <div>
      {
        <Card
          className={
            !financialStatus
              ? //checks to see if financialStatus is true, and renders a fade in effect if true
                classes.containerLoading
              : classes.containerLoaded
          }
        >
          <div className={classes.top}>
            <span className={classes.title}>Financial Bookmarks</span>

            <CardMedia
              className={classes.media}
              image={cashIcon}
              title="Money"
            />
          </div>
          <CardContent className={classes.bankCard}>
            {state.map((financials, i) => {
              return (
                <div key={i}>
                  <div className={classes.optionsContainer}>
                    <a
                      href={financials.FinancialSite}
                      target="_blank"
                      className={classes.links}
                    >
                      <span className={classes.names}>
                        {financials.FinancialName}
                      </span>
                    </a>
                  </div>
                </div>
              );
            })}
          </CardContent>
        </Card>
      }
    </div>
  );
};

export default FinancialDashboard;
