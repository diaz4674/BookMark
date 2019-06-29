import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import clsx from "clsx";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import TextField from "@material-ui/core/TextField";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import { Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  test: {
    backgroundColor: "#9471e9",
    height: "100%"
  },
  margin: {
    margin: theme.spacing(1)
  },
  textField: {
    flexBasis: 200
  },
  loginContainer: {
    paddingTop: "200px"
  },
  card: {
    margin: "0 auto",
    width: "400px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },
  container: {
    width: "100%",
    display: "flex",
    justifyContent: "center"
  },
  pos: {
    marginBottom: 12
  },
  signUp: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  pTag: {
    marginRight: "5px"
  }
}));

const Login = props => {
  const classes = useStyles();

  const [values, setValues] = React.useState({
    email: "",
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false
  });

  const handleChange = prop => e => {
    setValues({ ...values, [prop]: e.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const loginHandler = () => {
    console.log(values.email, values.password);
    props.history.push("/dashboard");
  };

  return (
    <div className={classes.test}>
      <div className={classes.loginContainer}>
        <Card className={classes.card}>
          <CardContent>
            <Typography
              variant="h5"
              component="h2"
              className={classes.container}
            >
              Login
            </Typography>
            <TextField
              id="filled-dense"
              label="Enter Email"
              className={clsx(
                classes.margin,
                classes.textField,
                classes.container
              )}
              margin="dense"
              variant="filled"
              value={values.email}
              onChange={handleChange("email")}
            />
            <TextField
              id="filled-adornment-password"
              className={clsx(
                classes.margin,
                classes.textField,
                classes.container
              )}
              variant="filled"
              type={values.showPassword ? "text" : "password"}
              label="Password"
              value={values.password}
              onChange={handleChange("password")}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      edge="end"
                      aria-label="Toggle password visibility"
                      onClick={handleClickShowPassword}
                    >
                      {values.showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                )
              }}
            />
          </CardContent>
          <CardActions>
            <Button size="small" onClick={e => loginHandler()}>
              Login
            </Button>
          </CardActions>
          <div className={classes.signUp}>
            <p className={classes.pTag}>Don't have an account? </p>
            <Link to="/signup"> Sign Up</Link>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Login;