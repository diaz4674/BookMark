import React, { useEffect, useState } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { getmyFinancials } from "../actions";
import axios from "axios";
import CardMedia from "@material-ui/core/CardMedia";

const useStyles = makeStyles(theme => ({
  container: {
    margin: "50px 0 0 0"
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
  }
}));

const FinancialDashboard = props => {
  const classes = useStyles();
  const [state, setState] = useState([]);
  const [financialStatus, setFinancials] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const deconstructedToken = token.split(".")[1];
    const deconstructedUserID = JSON.parse(window.atob(deconstructedToken));
    let id = deconstructedUserID.id;

    const headers = { authorization: localStorage.getItem("token") };

    axios
      .get(`https://be-bookmark.herokuapp.com/getUserFinancial/${id}`, {
        headers
      })
      .then(res => {
        setState(res.data);
      })
      .catch(err => console.log(err));
  }, []);

  useEffect(() => {
    setFinancials(true);
  }, [state]);

  return (
    <div>
      <Card className={classes.container}>
        <div className={classes.top}>
          <span className={classes.title}>Financial Bookmarks</span>

          <CardMedia
            className={classes.media}
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR98kclxO8iMkcaCN4pmKEtxC3FkgHm05DTDdaY95CjqtQeDGk6"
            title="Money"
          />
        </div>

        {state.map((financials, i) => {
          return (
            <div key={i}>
              <CardContent className={classes.bankCard}>
                <a
                  href={financials.FinancialSite}
                  target="_blank"
                  className={classes.links}
                >
                  <span className={classes.names}>
                    {financials.FinancialName}
                  </span>
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
)(FinancialDashboard);
