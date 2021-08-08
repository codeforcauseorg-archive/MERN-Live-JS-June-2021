import { Switch, Route } from "react-router-dom";
import { LoginPage } from "./Login";
import { HomePage } from "./HomePage";
import React from "react";
import { AuthGaurd } from "./AuthGaurd";
import { UsersPage } from "./UsersPage";

function Routes() {

  return (
    <Switch>
      <Route path="/login">
        <LoginPage />
      </Route>
      <Route path="/users">
        <UsersPage />
      </Route>
      <Route path="/">
        <AuthGaurd>
          <HomePage />
        </AuthGaurd>
      </Route>
    </Switch>
  );
}

export { Routes };
