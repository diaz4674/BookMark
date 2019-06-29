import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Shopping from "./Shopping";
import Button from "@material-ui/core/Button";
import AddShops from "./AddShops";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%"
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular
  }
}));

const ShoppingCard = props => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState("panel1");
  const [render, setRender] = useState(false);

  const reRenderHandler = e => {
    setRender(!render);
  };

  return (
    <>
      <div>
        <h1>Shopping Bookmarks</h1>
        <Button onClick={props.goBack}>Go Back</Button>
      </div>

      <div className={classes.root}>
        <ExpansionPanel square expanded={expanded === "panel1"}>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading}>Shopping Sites</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Shopping reRenderHandler={reRenderHandler} />
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
            <AddShops reRenderHandler={reRenderHandler} />
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </div>
    </>
  );
};

export default ShoppingCard;
