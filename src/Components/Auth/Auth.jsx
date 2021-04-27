import { Box } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import SignIn from "./SignIn/signIn";
import SignUp from "./SignUp/SignUp";
import firebase from "firebase";
import { firebaseConfig } from "../../utils/appConfig";

const initData = { email: "", password: "", query: "sign up" };

export default function Auth() {
  const [data, setData] = useState(initData);
  const [userData, setUserData] = useState({});

  useEffect(() => {
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }

    const db = firebase.firestore();

    db.collection("users")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          const data = doc.data();
          console.log(`${doc.id}=>${JSON.stringify(data)}`);
        });
      });
  }, []);

  return (
    <Box display="flex" flexDirection="column">
      <SignIn setData={setData} setUserData={setUserData} />
    </Box>
  );
}
