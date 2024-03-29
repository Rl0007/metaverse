import React, { useContext } from "react";
import "./Login_component.css";
import meta_logo from "./meta_logo_3.png";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import AuthContext from "../AuthContext";
import { Link } from "react-router-dom";
function Login_component() {
  const navigate = useNavigate();
  let { loginUser } = useContext(AuthContext);

  return (
    <div>
      <div className="login_form_container">
        <img
          src={meta_logo}
          className="meta_logo"
          onClick={() => {
            navigate("/");
          }}
          alt=""
        />
        {/* <p
          style={{ fontSize: "50px" }}
          onClick={() => {
            navigate("/");
          }}
        >
          Metaverse
        </p> */}
        <h1 className="login">Login</h1>
        <Form onSubmit={loginUser}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="text"
              name="username"
              placeholder="Enter email"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword3">
            <Form.Control
              type="password"
              name="password"
              placeholder="Password"
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Login
          </Button>
          <Button
            variant="primary"
            className="signup_button"
            type="button"
            onClick={() => {
              navigate("/signup");
            }}
          >
            sign up
          </Button>
        </Form>
        <p className="mt-5 mb-3 " style={{ color: "white" }}>
          Forgot Password ?{" "}
          <Link
            to="/send_reset_password_link"
            style={{ color: "black", textDecoration: "None" }}
          >
            Reset Password
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login_component;
