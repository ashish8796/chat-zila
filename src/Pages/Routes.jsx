import React from "react";
import { Route, Switch } from "react-router-dom";
import Auth from "../Components/Auth";
import SignIn from "../Components/Auth/SignIn/signIn";
import SignUp from "../Components/Auth/SignUp/SignUp";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact>
        <Auth />
      </Route>

      <Route path="/signin">
        <SignIn />
      </Route>

      <Route path="/signup">
        <SignUp />
      </Route>
    </Switch>
  );
}
