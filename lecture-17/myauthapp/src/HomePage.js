import { useContext } from "react";
import { Redirect } from "react-router-dom";
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
          firebaseapp.auth().signOut();
        }}
      >
        Logout
      </button>
    </div>
  );
}

export { HomePage };
