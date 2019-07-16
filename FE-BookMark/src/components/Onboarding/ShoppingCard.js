import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Shopping from "./Shopping";
import AddShops from "./AddShops";
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
    height: "100%",
    width: "100%"
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
  shoppingCard: {
    height: "auto"
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular
  }
}));

const ShoppingCard = props => {
  const classes = useStyles();

  //Component State
  const [expanded, setExpanded] = React.useState("panel1");
  const [render, setRender] = useState(false);

  const reRenderHandler = e => {
    //toggles the render state.
    //The render state is passed as a prop to the Banks, and AddBanks Component to refresh the components.
    setRender(!render);
  };

  let nav;
  // Looks to see if navbarOff prop is passed to this component, if it isn't passed, it shows the Onboard Navbar in component
  !props.navbarOff ? (nav = <OnboardNav />) : (nav = null);
  // Reason for this is because this component is in the Onboarding component and inside the Dashboard component

  return (
    <>
      {/* displays navbar if navbarOff prop is passed */}
      {nav}
      <div className={classes.categoryContainer}>
        <Card className={classes.cardContainer}>
          <CardContent className={classes.shoppingCard}>
            <div>
              <h1>Shopping Bookmarks</h1>
            </div>

            <div className={classes.root}>
              <ExpansionPanel square expanded={expanded === "panel1"}>
                <ExpansionPanelSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography className={classes.heading}>
                    Shopping Sites
                  </Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  {/* Displays Shopping component */}
                  <Shopping
                    reRenderHandler={reRenderHandler}
                    turnOffShopping={props.turnOffShopping}
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
                    Don't see your fav shop? Add your own here!
                  </Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  {/* Displays AddShops Component */}
                  <AddShops reRenderHandler={reRenderHandler} />
                </ExpansionPanelDetails>
              </ExpansionPanel>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default ShoppingCard;
