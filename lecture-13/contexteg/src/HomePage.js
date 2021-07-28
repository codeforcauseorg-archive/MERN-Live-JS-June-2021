import { useContext } from "react";
import { UserContext } from "./App";

let HomePage = function () {

    let { loggedin } = useContext(UserContext);

    return (<div>
        {loggedin ? <h1>Welcome Sir</h1> : <h1>Please Login</h1>}
    </div>)
}

export default HomePage;