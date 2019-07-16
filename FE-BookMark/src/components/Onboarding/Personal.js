import React, { useState } from "react";
import FormLabel from "@material-ui/core/FormLabel";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { deleteSite } from "../../actions";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { setPersonal } from "../../actions";
import { withRouter } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  //Component CSS
  formContainer: {
    width: "100%",
    display: "flex"
  },
  container: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    width: "100%"
  },
  item: {
    display: "flex",
    justifyContent: "center",
    margin: "20px 25px"
  },
  buttonContainer: {
    margin: "20px auto 0"
  }
}));

const Personal = props => {
  const classes = useStyles();

  //Component States
  const [state, setState] = React.useState({});
  const [newSite, setNewSite] = useState([]);
  const [open, setOpen] = React.useState(false);

  function handleClickOpen() {
    //Sets the open state to true which then open pop up dialogue box
    setOpen(true);
  }

  function handleClose() {
    //Sets the open state to false which then closes the pop up dialogue box
    setOpen(false);
  }
  const handleChange = name => e => {
    setState({ ...state, [name]: e.target.checked });
    //if the user selects a swatch to be true, it starts the process of pushing the selected data to the state
    if (e.target.checked === true) {
      if (newSite.indexOf(name) > -1) {
        //checks to see if the name is already in the new site state array, and returns null if it is.
        return null;
      } else {
        //If name is not in new site state array, it adds the selected data to the new site state
        setNewSite([...newSite, name]);
      }
    } else {
      //if the swatch is turned to false, it removes the selected data from the new site state
      for (var i = newSite.length - 1; i >= 0; i--) {
        if (newSite[i] === name) {
          //looks to see if the selected data matches the new sites state to remove it from the state.
          newSite.splice(i, 1);
          // break;       //<-- Uncomment  if only the first term has to be removed
        }
      }
    }
  };

  const dashboardRedirect = async () => {
    //Looks to see if redirect prop is passed to this component because this component is used in two different locations, the Dashboard and the Onboarding process.
    //The redirect prop is passed if the user is in the Dashboard, to display/not display certain data

    //if in Dashboard component to add more sites, redirect is true.
    if (props.redirect) {
      //sends the state data selected to the actions axios  post call
      await props.setPersonal(newSite);
      //Calls function from the Added Cats component to not display this component, and display the next component
      props.turnOffPersonal();
    } else {
      //sends the new banks state data to the actions axios post call
      await props.setPersonal(newSite);
      //sends the user to the dashboard component
      props.history.push("/dashboard");
    }
  };

  return (
    <FormControl component="fieldset" className={classes.formContainer}>
      <FormLabel component="legend">Choose personal site to add</FormLabel>
      <div className={classes.container}>
        {props.personal.map((site, index) => {
          //personal is a reducer store array that displays the website name and contains the site's URL.
          return (
            <>
              <FormGroup key={index} className={classes.item}>
                <FormControlLabel
                  control={
                    <Switch
                      checked={state.value}
                      onChange={handleChange(site)}
                      value={site.value}
                    />
                  }
                  label={site.personalName}
                />
              </FormGroup>
            </>
          );
        })}
      </div>

      <Button
        variant="outlined"
        color="primary"
        onClick={handleClickOpen}
        className={classes.buttonContainer}
      >
        {props.redirect ? "All Set!" : "Take me to my Dashboard!"}
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Did you finish selecting your personal sites?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {props.redirect
              ? ""
              : "You will have a chance to add more once in your dashboard as well."}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Not yet
          </Button>
          <Button onClick={dashboardRedirect} color="primary" autoFocus>
            Yes, all set!
          </Button>
        </DialogActions>
      </Dialog>
    </FormControl>
  );
};

const mapStateToProps = state => {
  return {
    personal: state.personal
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    { setPersonal }
  )(Personal)
);
