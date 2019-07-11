import React, { useEffect, useState } from "react";
import FormLabel from "@material-ui/core/FormLabel";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
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
    margin: "0 auto"
  }
}));

const Personal = props => {
  const classes = useStyles();
  const [state, setState] = React.useState({});
  const [newSite, setNewSite] = useState([]);
  const [open, setOpen] = React.useState(false);

  function handleClickOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }
  const handleChange = name => e => {
    setState({ ...state, [name]: e.target.checked });
    if (e.target.checked === true) {
      if (newSite.indexOf(name) > -1) {
        return null;
      } else {
        setNewSite([...newSite, name]);
      }
    } else {
      for (var i = newSite.length - 1; i >= 0; i--) {
        if (newSite[i] === name) {
          newSite.splice(i, 1);
          // break;       //<-- Uncomment  if only the first term has to be removed
        }
      }
    }
  };

  const dashboardRedirect = async () => {
    await props.setPersonal(newSite);
    props.history.push("/dashboard");
  };

  return (
    <FormControl component="fieldset" className={classes.formContainer}>
      <FormLabel component="legend">Choose personal site to add</FormLabel>
      <div className={classes.container}>
        {props.personal.map((site, index) => {
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
        Take me to my Dashbaord!
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
            You will have a chance to add more once in your dashboard as well.
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
    { deleteSite, setPersonal }
  )(Personal)
);
