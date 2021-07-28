import React, { useState } from "react";
import "./App.css";
import HomePage from "./HomePage";

let UserContext = React.createContext();

function App() {

  let [loggedin, setLoggedin] = useState(false);

  return (
    <div id="buttonbox">
      <UserContext.Provider value={{ loggedin, setLoggedin }}>
        {
          loggedin ? <button onClick={function () {
            setLoggedin(false);
          }}>Logout</button> : <button onClick={function () {
            setLoggedin(true);
          }}>Login</button>
        }

        <HomePage />
      </UserContext.Provider>

    </div>
  );
}

export { App, UserContext };
