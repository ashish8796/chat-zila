import {
  Box,
  Typography,
  TextField,
  Button,
  makeStyles,
} from "@material-ui/core";
import React, { useState } from "react";

import firebase from "firebase";
import LogInByGoogle from "./SignInByGoogle";
import { useHistory } from "react-router";

const useStyles = makeStyles({
  loginCont: {
    width: "50vw",
    margin: "20px auto",

    "& > article div ": {
      width: "100%",
    },

    "& input": {
      width: "100%",
    },
  },

  textField: {
    margin: "15px 0",
  },

  button: {
    marginLeft: "auto",
    display: "block",
    fontSize: "20px",
  },

  signUpButton: {
    cursor: "pointer",
    color: "#f50057",
  },
});

const initData = { email: "", password: "" };

export default function SignIn() {
  const classes = useStyles();
  const history = useHistory();
  const [loginData, setLoginData] = useState(initData);
  const { email, password } = loginData;

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleOnClick = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in
        var user = userCredential.user;
        console.log(user);
        // ...
      })
      .catch((error) => {
        console.log(error);
        var errorCode = error.code;
        var errorMessage = error.message;
      });
  };

  const handleSignUpClick = () => {
    history.push("signup");
  };

  return (
    <Box component="section" className={classes.loginCont}>
      <Typography variant="h3">Sign In</Typography>

      <LogInByGoogle />

      <Box component="article">
        <TextField
          variant="outlined"
          label="Email"
          placeholder="Enter your email"
          required
          color="secondary"
          className={classes.textField}
          onChange={handleOnChange}
          name="email"
        />

        <br />

        <TextField
          variant="outlined"
          label="Password"
          placeholder="Enter your password"
          required
          color="secondary"
          className={classes.textField}
          onChange={handleOnChange}
          name="password"
        />

        <br />

        <Button
          variant="contained"
          color="secondary"
          className={classes.button}
          display="block"
          onClick={handleOnClick}
        >
          Sign In
        </Button>
      </Box>

      <Box>
        <Typography>
          Don't have an account?{" "}
          <Box
            component="span"
            color="secondary"
            className={classes.signUpButton}
            onClick={handleSignUpClick}
          >
            Sign Up
          </Box>
        </Typography>
      </Box>
    </Box>
  );
}
