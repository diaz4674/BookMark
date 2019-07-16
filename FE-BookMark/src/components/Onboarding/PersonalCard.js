import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Personal from "./Personal";
import AddPersonal from "./AddPersonal";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import OnboardNav from "../Navbars/OnboardNav";

const useStyles = makeStyles(theme => ({
  //Component CSS
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

  //Component State
  const [expanded, setExpanded] = React.useState("panel1");
  const [render, setRender] = useState(false);

  const reRenderHandler = e => {
    //toggles the render state.
    //The render state is passed as a prop to the Personal, and AddPersonal Component to refresh the components.
    setRender(!render);
  };

  let nav;

  // Looks to see if navbarOff prop is passed to this component, if it isn't passed, it shows the Onboard Navbar in component
  !props.navbarOff ? (nav = <OnboardNav />) : (nav = null);
  // Reason for this is because this component is in the Onboarding component and inside the Dashboard component

  return (
    <>
      {nav}
      <div className={classes.categoryContainer}>
        <Card className={classes.cardContainer}>
          <CardContent>
            <div>
              <h1>Personal Bookmarks</h1>
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
                  {/* Displays Personal component */}
                  <Personal
                    reRenderHandler={reRenderHandler}
                    turnOffPersonal={props.turnOffPersonal}
                    redirect={props.redirect}
                  />
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
                  {/* Displays AddPersonal component */}
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
