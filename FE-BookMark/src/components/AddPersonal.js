import React, { useState } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import { addPersonalSite } from "../actions";
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

const AddPersonal = props => {
  const classes = useStyles();

  const [site, setSite] = useState("");

  const [personalSite, setPersonalSite] = useState("");

  const handleAddPersonalSite = e => {
    setPersonalSite(e.target.value);
  };
  const handleAddSite = e => {
    setSite(e.target.value);
  };

  const Submit = async e => {
    e.preventDefault();
    if (!personalSite || !site) {
      console.log(personalSite, site);
      console.log("please don't leave empty");
    } else {
      await props.addPersonalSite({ name: personalSite, site: site });
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
        label="Enter Personal Site Name"
        placeholder="GameInformer, CNN, etc."
        multiline
        className={classes.textField}
        margin="normal"
        variant="filled"
        value={personalSite}
        onChange={e => handleAddPersonalSite(e)}
      />
      <TextField
        id="filled-dense"
        label="Copy and paste Personal Site website"
        className={clsx(classes.textField, classes.dense)}
        margin="dense"
        variant="filled"
        value={site}
        onChange={e => handleAddSite(e)}
      />
      <Button type="submit">Add Personal Site</Button>
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
  { addPersonalSite }
)(AddPersonal);
