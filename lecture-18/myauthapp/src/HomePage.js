import { useContext } from "react";
import axios from "./utils/axios";
import { UserContext } from "./App";
import { firebaseapp } from "./utils/firebase";

function HomePage() {
  let { user } = useContext(UserContext);
  return (
    <div>
      <h1>{user.displayName}</h1>
      <img src={user.photoURL} height="200px" />
      <button
        onClick={function () {
          axios.get("http://localhost:5000/ping").then(function(response){
            console.log(response);
          }).catch(function(err){
            console.log(err);
          })
        }}
      >
        Ping the server
      </button>
      <button
        onClick={function () {
          firebaseapp.auth().signOut();
        }}
      >
        Logout
      </button>
    </div>
  );
}

export { HomePage };
