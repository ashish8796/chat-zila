import { Box, Button, makeStyles, Typography } from "@material-ui/core";
import React, { useState } from "react";
import firebase from "firebase";

const useStyles = makeStyles({
  loginByGoogleButton: {
    width: "100%",
    margin: "30px 0 20px",
    fontSize: "20px",
    padding: "10px 0",
  },
});

export default function LogInByGoogle() {
  const classes = useStyles();

  const handleLoginByGoogle = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();

    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        const credential = result.credential;
        console.log(credential);
      })
      .catch((error) => {
        // Handle Errors here.
        console.log(error);
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
      });
  };

  return (
    <Box>
      <Button
        variant="contained"
        color="secondary"
        className={classes.loginByGoogleButton}
        onClick={handleLoginByGoogle}
      >
        Sign In By Google
      </Button>
    </Box>
  );
}
