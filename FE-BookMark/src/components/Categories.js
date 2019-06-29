import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import SimpleCard from "./SimpleCard";
import FinancialCard from "./FinancialCard";
import ShoppingCard from "./ShoppingCard";
import PersonalCard from "./PersonalCard";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import "../styles.css";

const useStyles = makeStyles(theme => ({
  categoryContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#9471e9",
    height: "100%",
    width: "100%"
  },
  heightClass: {
    paddingTop: "100px",
    width: "80%",
    ["@media (max-width:780px)"]: {
      height: "100%",
      padding: "0"
    }
  },
  cardContainer: {
    margin: "0 auto",
    width: "100%",
    ["@media (max-width:780px)"]: {
      height: "95%",
      overflow: "visible",
      marginTop: "20px"
    }
  }
}));

const Categories = props => {
  const classes = useStyles();
  const [page, setPage] = useState("");

  const switchPage = pageName => {
    setPage(pageName);
  };

  let currentCategory;

  if (page === "") {
    currentCategory = (
      <SimpleCard
        className={classes.heightClass}
        loadFinancial={switchPage.bind(this, "financial")}
        loadShopping={switchPage.bind(this, "shopping")}
        loadPersonal={switchPage.bind(this, "personal")}
      />
    );
  } else if (page === "financial") {
    currentCategory = <FinancialCard goBack={switchPage.bind(this, "")} />;
  } else if (page === "shopping") {
    currentCategory = <ShoppingCard goBack={switchPage.bind(this, "")} />;
  } else if (page === "personal") {
    currentCategory = <PersonalCard goBack={switchPage.bind(this, "")} />;
  }

  return (
    <div className={classes.categoryContainer}>
      <div className={classes.heightClass}>
        <Card className={classes.cardContainer}>
          <CardContent>
            <div>
              <div>{currentCategory}</div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Categories;
