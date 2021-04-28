import firebase from "firebase";
import { SET_USERS, SET_SIGN_IN_USER, SIGN_OUT_USER } from "./actionTypes";

export const setUsers = () => (dispatch) => {};

export const setUser = (data) => {
  return { type: SET_SIGN_IN_USER, payload: data };
};

export const signInUserByEmailAndPassword = (email, password) => (dispatch) => {
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      const user = userCredential.user;

      dispatch(setUser(user));
    })
    .catch((error) => {
      console.log(error);
      var errorCode = error.code;
      var errorMessage = error.message;
    });
};

export const signInUserByGoogle = () => (dispatch) => {
  const provider = new firebase.auth.GoogleAuthProvider();

  firebase
    .auth()
    .signInWithPopup(provider)
    .then((response) => {
      dispatch(setUser(response.user));
    })
    .catch((error) => {
      console.log(error);
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
    });
};

export const signOutUser = () => {
  return {
    type: SIGN_OUT_USER,
  };
};
