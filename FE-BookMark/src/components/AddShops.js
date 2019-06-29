import React, { useState } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import { addStore } from "../actions";
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

const AddShops = props => {
  const classes = useStyles();

  const [site, setSite] = useState("");

  const [storeName, setStore] = useState("");

  const handleAddStore = e => {
    setStore(e.target.value);
  };
  const handleAddSite = e => {
    setSite(e.target.value);
  };

  const Submit = async e => {
    e.preventDefault();
    if (!storeName || !site) {
      console.log(storeName, site);
      console.log("please don't leave empty");
    } else {
      await props.addStore({ name: storeName, site: site });
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
      <Button type="submit">Add Store</Button>
    </form>
  );
};

const mapStateToProps = state => {
  return {
    shopping: state.shopping
  };
};

export default connect(
  mapStateToProps,
  { addStore }
)(AddShops);
