import React, { useState } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import { addBanks } from "../actions";
import { connect } from "react-redux";

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: "100%"
  },
  dense: {
    marginTop: 16
  }
}));

const AddBanks = props => {
  const classes = useStyles();

  const [site, setSite] = useState("");

  const [institutionName, setBanks] = useState("");

  const handleAddBank = e => {
    setBanks(e.target.value);
  };
  const handleAddSite = e => {
    setSite(e.target.value);
  };

  const Submit = async e => {
    e.preventDefault();
    if (!institutionName || !site) {
      console.log(institutionName, site);
      console.log("please don't leave empty");
    } else {
      await props.addBanks({ name: institutionName, site: site });
      props.reRenderHandler();
      console.log(props.myBanks);
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
        label="Enter Institution Name"
        placeholder="Amazon, Best Buy Credit Card, etc."
        multiline
        className={classes.textField}
        margin="normal"
        variant="filled"
        value={institutionName}
        onChange={e => handleAddBank(e)}
      />
      <TextField
        id="filled-dense"
        label="Copy and paste institution website"
        className={clsx(classes.textField, classes.dense)}
        margin="dense"
        variant="filled"
        value={site}
        onChange={e => handleAddSite(e)}
      />
      <Button type="submit">Add Banks</Button>
    </form>
  );
};

const mapStateToProps = state => {
  return {
    myBanks: state.myBanks
  };
};

export default connect(
  mapStateToProps,
  { addBanks }
)(AddBanks);
