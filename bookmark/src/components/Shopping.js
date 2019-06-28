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
  container: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    width: "100%"
  },
  item: {
    margin: "20px 25px"
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

  // const refreshPage = () => {
  //   // setRenderBack = !reRender;
  //   // setreRender(setRenderBack);

  //   }
  // };

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
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Take me to my Dashbaord!
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Did you finish selecting your sites?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Select no if you would like to have more time to review selections,
            or browse other categories to add more sites to your bookmarks.
            Otherwise, select yes to be taken to your dashboard.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Not yet
          </Button>
          <Button onClick={handleClose} color="primary" autoFocus>
            Yes, all set!
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
