import { Box, Button, makeStyles, Typography } from "@material-ui/core";
import React, { useState } from "react";
import firebase from "firebase";
import { signInUserByGoogle } from "../../../store/users/actions";
import { useDispatch } from "react-redux";

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
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleLoginByGoogle = () => {
    dispatch(signInUserByGoogle());
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
