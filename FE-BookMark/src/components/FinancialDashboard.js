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
    margin: "50px 0"
  },
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
  bankCard: {
    height: "auto",
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap"
  },
  links: {
    textDecoration: "none",
    color: "black"
  },
  media: {
    margin: "0 auto",
    height: 300,
    width: "15em",
    borderRadius: "0%",
    ["@media (max-width:780px)"]: {
      height: 100,
      width: "36%"
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
                <h1>
                  <a
                    href={financials.FinancialSite}
                    target="_blank"
                    className={classes.links}
                  >
                    {financials.FinancialName}
                  </a>
                </h1>
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
