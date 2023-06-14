import { Button } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import AuthContext from "../AuthContext";

function Activate_account_component() {
  const navigate = useNavigate();
  const params = useParams();
  const [status, setstatus] = useState(null);
  const { verify_user } = useContext(AuthContext);
  const activate = () => {
    console.log("inside activate");
    let data = verify_user(params.uid, params.token).then((response) => {
      setstatus(response);
      console.log(response);
    });
  };
  const renderswitch = (param) => {
    console.log(param);
    switch (param) {
      case 204:
        return (
          <div style={{ color: "white" }}>
            Your Account is activated{" "}
            <p
              onClick={() => navigate("/login")}
              style={{ color: "lightblue" }}
            >
              Click here{" "}
            </p>{" "}
            to go to login page !!!
          </div>
        );
      case 403:
        return (
          <div>
            Account is already registered{" "}
            <p onClick={() => navigate("/login")}>Click here </p> to go to login
            page !!!
          </div>
        );
      case null:
        return (
          <Button onClick={() => activate()} style={{ color: "white" }}>
            Click to activate account
            {console.log("this is status", status)}
          </Button>
        );
      default:
        return (
          <div>
            An error occured please try again later{" "}
            <p onClick={() => navigate("/homepage")}>Click here </p> to go to
            home page !!!
          </div>
        );
    }
  };

  return <div>{renderswitch(status)}</div>;
}

export default Activate_account_component;
