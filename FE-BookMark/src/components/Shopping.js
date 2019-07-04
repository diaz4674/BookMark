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
import { deleteStore } from "../actions";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

const useStyles = makeStyles(theme => ({
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
    margin: "0 auto"
  }
}));

const Shopping = props => {
  const classes = useStyles();
  const [state, setState] = React.useState({});
  const [newShop, setNewShops] = useState([]);
  const [reRender, setreRender] = useState(false);
  const [open, setOpen] = React.useState(false);

  function handleClickOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  function redirect() {
    props.history.push('./personalSelect')
  }


  const handleChange = name => e => {
    setState({ ...state, [name]: e.target.checked });
    
    if (e.target.checked === true) {
      if (newShop.indexOf(name) > -1) {
        return null;
      } else {
        setNewShops([...newShop, name]);
      }
    } else {
      for (var i = newShop.length - 1; i >= 0; i--) {
        if (newShop[i] === name) {
          newShop.splice(i, 1);
          // break;       //<-- Uncomment  if only the first term has to be removed
        }
      }
    }
  };
  
  const destroyHandler = destroyShop => {
    props.deleteStore(destroyShop);
    props.reRenderHandler();
  };

  const submitHandler = e => {
    e.preventDefault();
    console.log(newShop);
  };

  // useEffect(() => {
  //   console.log("hi");
  // }, [destroyHandler]);

  return (
    <FormControl component="fieldset" className={classes.formContainer}>
      <FormLabel component="legend">Choose institutions to add</FormLabel>
      <div className={classes.container}>
        {props.shopping.map((shops, index) => {
          return (
            <>
              <FormGroup key={index} className={classes.item}>
                <FormControlLabel
                  control={
                    <Switch
                      checked={state.value}
                      onChange={handleChange(shops)}
                      value={shops.value}
                    />
                  }
                  label={shops.name}
                />
                <button onClick={() => destroyHandler(shops)}>Kill</button>
              </FormGroup>
            </>
          );
        })}
      </div>
      <FormHelperText>Be careful</FormHelperText>
      <Button onClick={submitHandler}>Log out stuff</Button>
      <Button variant="outlined" color="primary" onClick={handleClickOpen} className = {classes.buttonContainer}>
        Save Selections
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
            You will have a chance to add more once in your dashboard as well.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            No
          </Button>
          <Button onClick={redirect} color="primary" autoFocus>
            Yes, take me to the next category.
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

export default connect(
  mapStateToProps,
  { deleteStore }
)(Shopping);
