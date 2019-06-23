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

const useStyles = makeStyles(theme => ({
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
      animation: "shake 0.1s"
    }
  }
}));

const Banks = props => {
  const classes = useStyles();
  const [state, setState] = React.useState({});
  const [newBanks, setnewBanks] = useState([]);
  const [reRender, setreRender] = useState(false);
  // const [removeBank, setRemoveBank] = useState("");

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

  const submitHandler = e => {
    e.preventDefault();
    console.log(newBanks);
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
      <FormHelperText>Be careful</FormHelperText>
      <Button onClick={submitHandler}>Log out stuff</Button>
    </FormControl>
  );
};

const mapStateToProps = state => {
  return {
    myBanks: state.myBanks
  };
};

export default connect(
  mapStateToProps,
  { deleteBank }
)(Banks);
