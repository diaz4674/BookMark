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
import { deleteBank } from "../actions";
import DeleteOutlinedIcon from "@material-ui/icons/DeleteOutlined";
import Grid from "@material-ui/core/Grid";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import {withRouter} from "react-router-dom"
import Slide from '@material-ui/core/Slide';

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
  icon: {
    margin: theme.spacing(1),
    fontSize: 32,
    "&:hover": {
      cursor: "pointer",
      animation: "shake 0.1s"
    }
  },
  buttonContainer: {
    margin: "0 auto"
  }
}));
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});


const Banks = props => {
  const classes = useStyles();
  const [state, setState] = React.useState({});
  const [newBanks, setnewBanks] = useState([]);
  const [reRender, setreRender] = useState(false);
  const [open, setOpen] = React.useState(false);
  const [next, setNext] = React.useState(false);

  function handleClickOpen() {
    setOpen(true);
  }

  function redirect() {
    props.history.push('./shoppingSelect')
  }

  function handleClose() {
    setOpen(false);
  }
  
  const handleChange = name => e => {
    setState({ ...state, [name]: e.target.checked });
    if (e.target.checked === true) {
      if (newBanks.indexOf(name) > -1) {
        return null;
      } else {
        setnewBanks([...newBanks, name]);
      }
    } else {
      for (var i = newBanks.length - 1; i >= 0; i--) {
        if (newBanks[i] === name) {
          newBanks.splice(i, 1);
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

  const destroyHandler = destroyBank => {
    props.deleteBank(destroyBank);
    props.reRenderHandler();
  };

  // useEffect(() => {
  //   console.log("hi");
  // }, [destroyHandler]);


  return (
    <FormControl component="fieldset" className={classes.formContainer}>
      <FormLabel component="legend">Choose institutions to add</FormLabel>
      <div className={classes.container}>
        {props.myBanks.map((banks, index) => {
          return (
            <>
              <FormGroup key={index} className={classes.item}>
                <FormControlLabel
                  control={
                    <Switch
                      checked={state.value}
                      onChange={handleChange(banks)}
                      value={banks.value}
                    />
                  }
                  label={banks.name}
                />
                <Grid item xs={8}>
                  <DeleteOutlinedIcon
                    className={classes.icon}
                    onClick={() => destroyHandler(banks)}
                  />
                </Grid>
              </FormGroup>
            </>
          );
        })}
      </div>
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
          {"Did you finish selecting your financial sites?"}
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
    myBanks: state.myBanks
  };
};

export default withRouter(
connect(
  mapStateToProps,
  { deleteBank }
)(Banks));
