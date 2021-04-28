import { Box, Button } from "@material-ui/core";
import React from "react";
import firebase from "firebase";

export default function SignOut() {
  const handleSignOut = () => {
    firebase
      .auth()
      .signOut()
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <Box>
      <Button onClick={handleSignOut} variant="contained" color="secondary">
        Sign Out
      </Button>
    </Box>
  );
}
