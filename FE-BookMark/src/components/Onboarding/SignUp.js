import React, { useEffect } from "react";
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
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import axios from "axios";
import { postRegister } from "../../actions";
import OnboardNav from "../Navbars/OnboardNav";

const useStyles = makeStyles(theme => ({
  //Component CSS
  margin: {
    margin: theme.spacing(1)
  },
  textField: {
    flexBasis: 200
  },
  SignUpContainer: {
    paddingTop: "200px",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center"
  },
  card: {
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
  dense: {
    marginTop: 16
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

const SignUp = props => {
  const classes = useStyles();

  const [values, setValues] = React.useState({
    // Component State
    email: "",
    username: "",
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false
  });

  // useEffect(() => {

  // });

  const handleChange = prop => e => {
    // Sets the selected state and updates it's value
    setValues({ ...values, [prop]: e.target.value });
  };

  const handleClickShowPassword = () => {
    // updates the password state value
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const loginHandler = async e => {
    // DRY
    let { username, email, password } = values;

    if (username === "" || email === "" || password === "") {
      e.preventDefault();
      alert("Sorry you can't leave the fields blank");
    } else {
      e.preventDefault();
      localStorage.removeItem("token");
      let body = {
        username: username,
        email: email,
        password: password
      };
      axios
        .post("https://be-bookmark.herokuapp.com/register", body)
        .then(res => {
          // After sign up, sets token to Headers
          localStorage.setItem("token", res.data.token);
          props.history.push("/welcome");
        })
        .catch(err => alert("Sorry it seems this user already exists"));
    }
  };

  return (
    <div className={classes.root}>
      <OnboardNav />
      <div className={classes.SignUpContainer}>
        <form onSubmit={loginHandler}>
          <Card className={classes.card}>
            <CardContent>
              <Typography
                variant="h5"
                component="h2"
                className={classes.container}
              >
                Sign Up
              </Typography>
              <TextField
                id="filled-dense"
                label="Enter Username"
                className={clsx(
                  classes.margin,
                  classes.textField,
                  classes.container
                )}
                margin="dense"
                variant="filled"
                value={values.username}
                onChange={handleChange("username")}
              />
              <TextField
                id="filled-dense"
                label="Enter Email"
                type="email"
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
                        {values.showPassword ? (
                          <VisibilityOff />
                        ) : (
                          <Visibility />
                        )}
                      </IconButton>
                    </InputAdornment>
                  )
                }}
              />
            </CardContent>
            <CardActions>
              <Button size="small" type="submit">
                Next
              </Button>
            </CardActions>
          </Card>
        </form>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({ state });

export default withRouter(
  connect(
    mapStateToProps,
    {
      postRegister
    }
  )(SignUp)
);
