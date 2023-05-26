import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useLocation, useNavigate } from "react-router-dom";
import Signup_component from "../Components/Signup_component";
import Login_component from "../Components/Login_component";

import meta_logo from "./meta_logo_3.png";
import "./Signup_page.css";
import Reset_password_email from "../Components/Reset_password_email";
import Activate_account_component from "../Components/Activate_account_component";
// import "./Testpage2.css";
function Signup_page() {
  const navigate = useNavigate();
  const location = useLocation();
  let url_path = location.pathname;
  if (url_path.startsWith("/activate")) {
    url_path = "/activate";
  }
  // if(url_path==='send_reset_password_link'){
  //   return(

  //   )
  // }
  const renderSwitch = (param) => {
    switch (param) {
      case "/signup":
        return <Signup_component />;
      case "/login":
        return <Login_component />;
      case "/send_reset_password_link":
        return <Reset_password_email />;
      case "/activate":
        return <Activate_account_component />;
    }
  };
  return (
    <>
      <div className="topsvg">
        {console.log(url_path)}
        <div className="inner-header flex">
          <div className="Signup_page">{renderSwitch(url_path)}</div>
        </div>

        <div>
          <svg
            className="waves"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 24 150 28"
            preserveAspectRatio="none"
            shapeRendering="auto"
          >
            <defs>
              <path
                id="gentle-wave"
                d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
              />
            </defs>
            <g className="parallax">
              <use
                xlinkHref="#gentle-wave"
                x="48"
                y="0"
                fill="rgba(255,255,255,0.7"
              />
              <use
                xlinkHref="#gentle-wave"
                x="48"
                y="3"
                fill="rgba(255,255,255,0.5)"
              />
              <use
                xlinkHref="#gentle-wave"
                x="48"
                y="5"
                fill="rgba(255,255,255,0.3)"
              />
              <use xlinkHref="#gentle-wave" x="48" y="7" fill="#fff" />
            </g>
          </svg>
        </div>
      </div>

      <div className="content flex">
        <p>© 2022–2023 </p>
      </div>
    </>
  );
}

export default Signup_page;
