import { Box } from "@material-ui/core";
import React, { useState } from "react";
import Login from "./Login/Login";
import SignUp from "./SignUp/SignUp";
import firebase from "firebase";

const initData = { email: "", password: "", query: "sign up" };

export default function Auth() {
  const [data, setData] = useState(initData);
  const [userData, setUserData] = useState({});

  const firebaseConfig = {
    apiKey: "AIzaSyAGL0wseceqxDncUYtWF4Sf2Q-KOYyq0zQ",
    authDomain: "chat-zila.firebaseapp.com",
    projectId: "chat-zila",
    storageBucket: "chat-zila.appspot.com",
    messagingSenderId: "1088747126796",
    appId: "1:1088747126796:web:2aa1a0f5bb28cdbfa56e29",
    measurementId: "G-GZK19188EQ",
  };

  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }

  return (
    <Box display="flex" flexDirection="column">
      <Login setData={setData} setUserData={setUserData} />
      <SignUp setData={setData} />
    </Box>
  );
}
