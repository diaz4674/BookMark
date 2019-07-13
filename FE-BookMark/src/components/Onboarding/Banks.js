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
import { deleteBank } from "../../actions";
import DeleteOutlinedIcon from "@material-ui/icons/DeleteOutlined";
import Grid from "@material-ui/core/Grid";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { withRouter } from "react-router-dom";
import Slide from "@material-ui/core/Slide";
import { setFinancial } from "../../actions";

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
    margin: "20px auto 0"
  }
}));
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Banks = props => {
  const classes = useStyles();
  const [state, setState] = React.useState({});
  const [newBanks, setnewBanks] = useState([]);
  const [open, setOpen] = React.useState(false);

  function handleClickOpen() {
    setOpen(true);
  }

  const redirect = async () => {

    if(props.redirect){

      await props.setFinancial(newBanks);
      props.turnOffFinance()
    } else {
      await props.setFinancial(newBanks);
      props.history.push("./shoppingSelect");
    }
 
  };

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

  return (
    <FormControl component="fieldset" className={classes.formContainer}>
      <FormLabel component="legend">Choose institutions to add</FormLabel>
      <div className={classes.container}>
        {props.myBanks.map((banks, i) => {
          return (
            <>
              <FormGroup key={i} className={classes.item}>
                <FormControlLabel
                  control={
                    <Switch
                      checked={state.value}
                      onChange={handleChange(banks)}
                      value={banks.value}
                    />
                  }
                  label={banks.FinancialName}
                />
                <Grid item xs={8} />
              </FormGroup>
            </>
          );
        })}
      </div>

      <FormHelperText>If you don't want to add any, continue to the Shopping Category</FormHelperText>

      <Button
        variant="outlined"
        color="primary"
        onClick={handleClickOpen}
        className={classes.buttonContainer}
      >
        Save & Go to Shopping
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
            You can add more later.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            No
          </Button>
          <Button onClick={redirect} color="primary" autoFocus>
            Next
          </Button>
        </DialogActions>
      </Dialog>
    </FormControl>
  );
};

const mapStateToProps = state => {
  return {
    myBanks: state.myBanks,
    test: state.test
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    { setFinancial, deleteBank }
  )(Banks)
);
