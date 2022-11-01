import React, { useContext } from "react";
import "./Login_component.css";
import meta_logo from "./meta_logo_3.png";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import AuthContext from "../AuthContext";
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
        <h1 className="login">Please login</h1>
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
        {/* <p class="mt-5 mb-3 text-muted">© 2022–2023</p> */}
      </div>
    </div>
  );
}

export default Login_component;
