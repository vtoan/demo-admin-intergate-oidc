import React from "react";
import { Button } from "reactstrap";
//
export default function Header(props) {
  //handle
  const handleSignOut = () => {};

  return (
    <div className="clearfix">
      <div className="float-left">
        <img width="40" src="./logo192.png" alt="" />
      </div>
      <div className="float-right ">
        <span>Hello, User</span>
        <Button
          color="link"
          onClick={handleSignOut}
          className="pl-3 text-danger"
          size="sm"
        >
          Sign Out
        </Button>
      </div>
    </div>
  );
}
