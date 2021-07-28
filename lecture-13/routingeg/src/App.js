import { BrowserRouter, Switch, Route } from "react-router-dom";

import CustomPage from "./CustomPage"

let App = function () {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/" exact>
            <CustomPage which={"Home"} expiration={"11th July"} />
          </Route>
          <Route path="/about">
            <CustomPage which={"About"} />
          </Route>
          <Route path="/contacts">
            <CustomPage which={"Contacts"} />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
