import { useContext } from "react";
import { UserContext } from "./App";

import { Redirect } from "react-router-dom";

function AuthGaurd({children}) {
  let { user } = useContext(UserContext);

  if (user === undefined) {
    return <h1>Fetching User.....</h1>;
  } else if (user === null) {
    return <Redirect to="/login"></Redirect>;
  } else {
    return children;
  }
}

export {AuthGaurd};
