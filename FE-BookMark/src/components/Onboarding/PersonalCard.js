import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Personal from "./Personal";
import Button from "@material-ui/core/Button";
import AddPersonal from "./AddPersonal";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import OnboardNav from "../Navbars/OnboardNav";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%"
  },
  categoryContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: "auto",
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
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular
  }
}));

const PersonalCard = props => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState("panel1");
  const [render, setRender] = useState(false);

  const reRenderHandler = e => {
    setRender(!render);
  };

  let nav

  !props.navbarOff? nav = <OnboardNav /> : nav = null

  return (
    <>
    {nav}
      <div className={classes.categoryContainer}>
        <Card className={classes.cardContainer}>
          <CardContent>
            <div>
              <h1>Personal Bookmarks</h1>
              <Button onClick={props.goBack}>Go Back</Button>
            </div>

            <div className={classes.root}>
              <ExpansionPanel square expanded={expanded === "panel1"}>
                <ExpansionPanelSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography className={classes.heading}>
                    Personal Sites
                  </Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <Personal reRenderHandler={reRenderHandler} turnOffPersonal = {props.turnOffPersonal} redirect = {props.redirect} />
                </ExpansionPanelDetails>
              </ExpansionPanel>
              <ExpansionPanel>
                <ExpansionPanelSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                  <Typography className={classes.heading}>
                    Don't see your fav site? Add your own here!
                  </Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <AddPersonal reRenderHandler={reRenderHandler} />
                </ExpansionPanelDetails>
              </ExpansionPanel>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default PersonalCard;
