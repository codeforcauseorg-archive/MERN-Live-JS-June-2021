import "./App.css";
import { firebaseapp, firebase } from "./utils/firebase";
import React, { useEffect, useState } from "react";
import { Routes } from "./Routes";
import axios from "./utils/axios";

let UserContext = React.createContext();
let RoleContext = React.createContext();

function App() {
  let [user, setUser] = useState();
  let [role, setRole] = useState("admin");

  let statecallback = function (newUserState) {
    setUser(newUserState);
    if (newUserState) {
      firebaseapp
        .auth()
        .currentUser.getIdToken()
        .then(function (token) {
          axios.defaults.headers["Authorization"] = `Bearer ${token}`;
        });
    } else {
      axios.defaults.headers["Authorization"] = "";
    }
  };

  useEffect(function () {
    firebase.auth().onAuthStateChanged(statecallback);
  }, []);

  return (
    <div className="App">
      <UserContext.Provider value={{ user, setUser }}>
        <RoleContext.Provider value={{ role, setRole }}>
          <Routes />
        </RoleContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

export { App, UserContext, RoleContext };
