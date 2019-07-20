import React, { useState } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import { addStore } from "../../actions";
import { connect } from "react-redux";

const useStyles = makeStyles(theme => ({
  // component CSS
  container: {
    display: "flex",
    flexWrap: "wrap",
    margin: "0 auto"
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: "100%"
  },
  dense: {
    marginTop: 16
  },
  buttonContainer: {
    margin: "0 auto"
  }
}));

const AddShops = props => {
  const classes = useStyles();

  //Component States
  const [site, setSite] = useState("");
  const [storeName, setStore] = useState("");

  //Sets the user input fields to the state
  const handleAddStore = e => {
    setStore(e.target.value);
  };
  const handleAddSite = e => {
    setSite(e.target.value);
  };

  const Submit = async e => {
    e.preventDefault();

    if (!storeName || !site) {
      //if input fields are empty, displays message
      alert("please don't leave fields empty");
    } else {
      //Sends inputted data to the action axios call
      await props.addStore({
        storeName: storeName,
        storeSite: site
      });
      //Resets input fields to be blank
      setStore("");
      setSite("");
      //Calls function in the Personal Card Component to re-render and populate component with the new data
      props.reRenderHandler();
    }
  };

  return (
    <form
      className={classes.container}
      onSubmit={Submit}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="filled-textarea"
        label="Enter Name of Store"
        placeholder="Amazon, H&M, Louis Vuitton, etc."
        multiline
        className={classes.textField}
        margin="normal"
        variant="filled"
        value={storeName}
        onChange={e => handleAddStore(e)}
      />
      <TextField
        id="filled-dense"
        label="Copy and paste Store's website"
        className={clsx(classes.textField, classes.dense)}
        margin="dense"
        variant="filled"
        value={site}
        onChange={e => handleAddSite(e)}
      />
      <Button type="submit"  className={classes.buttonContainer}>
        Add Store
      </Button>
    </form>
  );
};

const mapStateToProps = state => {};

export default connect(
  mapStateToProps,
  { addStore }
)(AddShops);
