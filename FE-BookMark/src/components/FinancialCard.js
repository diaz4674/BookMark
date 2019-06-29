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

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%"
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
    <>
      <div>
        <h1>Financial Bookmarks</h1>
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
    </>
  );
};

export default FinancialCard;
