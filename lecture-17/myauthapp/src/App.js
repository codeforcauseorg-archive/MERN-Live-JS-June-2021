import "./App.css";
import { firebaseapp, firebase } from "./utils/firebase";
import React, { useEffect, useState } from "react";
import { Routes } from "./Routes";

let UserContext = React.createContext();

function App() {
  let [user, setUser] = useState();

  let statecallback = function (newUserState) {
    setUser(newUserState);
    console.log(newUserState);
  };

  useEffect(function () {
    firebase.auth().onAuthStateChanged(statecallback);
  }, []);

  return (
    <div className="App">
      <UserContext.Provider value={{ user, setUser }}>
        <Routes />
      </UserContext.Provider>
    </div>
  );
}

export {App, UserContext};
