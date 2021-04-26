import {
  Box,
  Button,
  TextField,
  Typography,
  makeStyles,
} from "@material-ui/core";
import React, { useState } from "react";

import firebase from "firebase";

const useStyles = makeStyles({
  signUpCont: {
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
});

const initData = { email: "", password: "" };

export default function SignUp() {
  const classes = useStyles();
  const [signUpData, setLoginData] = useState(initData);
  const { email, password } = signUpData;

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...signUpData, [name]: value });
  };

  const handleOnClick = () => {
    console.log(signUpData);
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
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
        // ..
      });
  };

  return (
    <Box component="section" className={classes.signUpCont}>
      <Typography variant="h3">Sign Up</Typography>

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
          onClick={handleOnClick}
        >
          Sign Up
        </Button>
      </Box>
    </Box>
  );
}
