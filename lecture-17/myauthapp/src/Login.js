import { firebaseapp, firebase } from "./utils/firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import { useContext } from "react";
import { UserContext } from "./App";

function LoginPage() {
  let { user } = useContext(UserContext);

  const uiConfig = {
    // Popup signin flow rather than redirect flow.
    signInFlow: "popup",
    // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
    signInSuccessUrl: "/",
    // We will display Google and Facebook as auth providers.
    signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
  };

  return (
    <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebaseapp.auth()} />
  );
}

export { LoginPage };
