import React from "react";
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
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { postLogin } from "../actions";
import axios from "axios";
import OnboardNav from "./Navbars/OnboardNav";

const useStyles = makeStyles(theme => ({
  //Component CSS
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
    justifyContent: "center",
    marginTop: "20px"
  },
  pos: {
    marginBottom: 12
  },
  signUp: {
    textDecoration: "none",
    margin: "0 0 25px 0"
  },
  pTag: {
    marginRight: "5px"
  },
  separator: {
    width: "80%",
    borderTop: "1px solid #cbd2d6",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    position: "relative",
    margin: "25px 0"
  },
  orText: {
    padding: "0 0.5em",
    color: "#6c7378",
    top: "-.7em",
    position: "relative",
    backgroundColor: "white"
  },
  loginButton: {
    backgroundColor: "#ba78fe",
    color: "white",
    "&:hover": {
      backgroundColor: "#9a37ff"
    }
  }
}));

const Login = props => {
  const classes = useStyles();

  const [values, setValues] = React.useState({
    //Component States
    email: "",
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false
  });

  const handleChange = prop => e => {
    //funciton changes the selected state to the value user inputs
    setValues({ ...values, [prop]: e.target.value });
  };

  const handleClickShowPassword = () => {
    //toggles the ability to view the password/hide password
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const loginHandler = async e => {
    //removes token from the local storage
    localStorage.removeItem("token");

    const loginCreds = {
      email: values.email,
      password: values.password
    };
    await axios
      //sends a post request to the login endpoint to authenticate user
      .post("https://be-bookmark.herokuapp.com/login", loginCreds)
      .then(res => {
        //set's the token to the local storage
        localStorage.setItem("token", res.data.token);
        //then pushes user to their dashboard
        props.history.push("/dashboard");
      })
      .catch(err => alert("Sorry, cannot find user, or wrong password/email"));
  };

  return (
    <div className={classes.test}>
      <OnboardNav />
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
            <Button
              variant="contained"
              size="medium"
              className={classes.loginButton}
              onClick={e => loginHandler()}
            >
              Login
            </Button>
          </CardActions>
          <div className={classes.separator}>
            <span className={classes.orText}> or </span>
          </div>
          <Link to="/signup" className={classes.signUp}>
            <Button variant="contained" size="medium" color="inherent">
              Sign Up
            </Button>
          </Link>
        </Card>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({});

export default withRouter(
  connect(
    mapStateToProps,
    {
      postLogin
    }
  )(Login)
);
