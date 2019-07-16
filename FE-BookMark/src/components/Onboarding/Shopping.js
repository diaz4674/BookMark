import React, { useState } from "react";
import FormLabel from "@material-ui/core/FormLabel";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import Switch from "@material-ui/core/Switch";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { withRouter } from "react-router-dom";
import { setStores } from "../../actions";

const useStyles = makeStyles(theme => ({
  //Component CSS
  formContainer: {
    width: "100%"
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

const Shopping = props => {
  const classes = useStyles();

  //Component States
  const [state, setState] = React.useState({});
  const [newShop, setNewShops] = useState([]);
  const [open, setOpen] = React.useState(false);

  function handleClickOpen() {
    //Sets the open state to true which then open pop up dialogue box
    setOpen(true);
  }

  function handleClose() {
    //Sets the open state to false which then closes the pop up dialogue box
    setOpen(false);
  }

  const redirect = async () => {
    //Looks to see if redirect prop is passed to this component because this component is used in two different locations, the Dashboard and the Onboarding process.
    //The redirect prop is passed if the user is in the Dashboard, to display/not display certain data

    //if in Dashboard component to add more sites, redirect is true.
    if (props.redirect) {
      //sends the state data selected to the actions axios  post call
      await props.setStores(newShop);
      //Calls function from the Added Cats component to not display this component, and display the next component
      props.turnOffShopping();
    } else {
      //sends the new Shop state data to the actions axios post call
      await props.setStores(newShop);
      //sends the user to add favorite personal sites section
      props.history.push("./personalSelect");
    }
  };

  const handleChange = name => e => {
    setState({ ...state, [name]: e.target.checked });

    if (e.target.checked === true) {
      //if the user selects a swatch to be true, it starts the process of pushing the selected data to the state
      if (newShop.indexOf(name) > -1) {
        //checks to see if the name is already in the new Shop state array, and returns null if it is.
        return null;
      } else {
        //If name is not in new Shop state array, it adds the selected data to the new Shop state
        setNewShops([...newShop, name]);
      }
    } else {
      //if the swatch is turned to false, it removes the selected data from the new Shop state
      for (var i = newShop.length - 1; i >= 0; i--) {
        if (newShop[i] === name) {
          //looks to see if the selected data matches the new Shop state to remove it from the state.
          newShop.splice(i, 1);
          // break;       //<-- Uncomment  if only the first term has to be removed
        }
      }
    }
  };

  return (
    <FormControl component="fieldset" className={classes.formContainer}>
      <FormLabel component="legend">Choose Store to add</FormLabel>
      <div className={classes.container}>
        {props.shopping.map((shops, i) => {
          //shopping is a reducer store array that displays the stores name and has the website in it as well.
          return (
            <>
              <FormGroup key={i} className={classes.item}>
                <FormControlLabel
                  control={
                    <Switch
                      checked={state.value}
                      onChange={handleChange(shops)}
                      value={shops.value}
                    />
                  }
                  label={shops.storeName}
                />
              </FormGroup>
            </>
          );
        })}
      </div>

      <FormHelperText>
        If you don't want to add any, continue to the Personal Category
      </FormHelperText>

      <Button
        variant="outlined"
        color="primary"
        onClick={handleClickOpen}
        className={classes.buttonContainer}
      >
        Save & Go to Personal
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Did you finish selecting your shopping sites?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            You can add more later.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            No
          </Button>
          <Button onClick={redirect} color="primary" autoFocus>
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </FormControl>
  );
};

const mapStateToProps = state => {
  return {
    shopping: state.shopping
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    { setStores }
  )(Shopping)
);
