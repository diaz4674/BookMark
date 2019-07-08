import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Banks from "./Banks";
import Button from "@material-ui/core/Button";
import AddBanks from "./addBanks";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { Link } from "react-router-dom";
import OnboardNav from "../Navbars/OnboardNav";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    height: "100%"
  },
  cardContainer: {
    margin: "25px auto",
    width: "80%",

    ["@media (max-width:780px)"]: {
      height: "auto",
      overflow: "visible",
      marginTop: "20px"
    }
  },
  bankCard: {
    height: "auto"
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular
  }
}));

const FinancialCard = props => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState("panel1");
  const [render, setRender] = useState(false);

  const reRenderHandler = e => {
    setRender(!render);
  };

  return (
    <div>
      <OnboardNav />
      <Card className={classes.cardContainer}>
        <CardContent className={classes.bankCard}>
          <div>
            <h1>Financial Bookmarks</h1>
            <Button>
              {" "}
              <Link to="./welcome"> Go Back </Link>
            </Button>
          </div>
          <div className={classes.root}>
            <ExpansionPanel square expanded={expanded === "panel1"}>
              <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className={classes.heading}>
                  Financial Institutions
                </Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Banks reRenderHandler={reRenderHandler} />
              </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel>
              <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography className={classes.heading}>
                  Don't see your insitution? Add your own here!
                </Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <AddBanks reRenderHandler={reRenderHandler} />
              </ExpansionPanelDetails>
            </ExpansionPanel>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default FinancialCard;
