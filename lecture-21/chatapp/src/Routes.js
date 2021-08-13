import { Switch, Route } from "react-router-dom";
import { LoginPage } from "./Login";
import { HomePage } from "./HomePage";
import React from "react";
import { AuthGaurd } from "./AuthGaurd";
import MainLayout from "./layouts/MainLayout";

function Routes() {
  return (
    <Switch>
      <Route path="/login">
        <LoginPage />
      </Route>
      <Route path="/">
        <AuthGaurd>
          <MainLayout>
            <HomePage />
          </MainLayout>
        </AuthGaurd>
      </Route>
    </Switch>
  );
}

export { Routes };
