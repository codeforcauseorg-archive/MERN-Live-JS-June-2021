import { Fragment, useContext } from "react";
import { RoleContext } from "./App";


function RoleGaurd({children, expected}) {
  let { role } = useContext(RoleContext);

  if(expected === role){
    return children;
  } else {
    return <Fragment/>;
  }
}

export {RoleGaurd};
