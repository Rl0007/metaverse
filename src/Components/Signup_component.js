import React, { useContext, useState } from "react";
import "./Signup_component.css";
import meta_logo from "./meta_logo_3.png";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import AuthContext from "../AuthContext";

function Signup_component() {
  const navigate = useNavigate();
  const [status, setstatus] = useState(null);
  let { signupUser } = useContext(AuthContext);

  console.log("this is status signup componenet ", status);
  if (status === 201) {
    return (
      <p style={{ color: "white" }}>
        Check your email to activate your account !!!
      </p>
    );
  }
  return (
    <div>
      <div className="signup_form_container">
        <img
          src={meta_logo}
          className="meta_logo"
          onClick={() => {
            navigate("/");
          }}
          alt=""
        />

        <h2 className="sign_up">Please sign up</h2>
        <Form
          onSubmit={async (e) => {
            setstatus(await signupUser(e));
          }}
        >
          <Form.Group className="mb-3" controlId="formBasicname">
            <Form.Control
              type="text"
              name="name"
              placeholder="Enter Username"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="email"
              name="email"
              placeholder="Enter email"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              type="password"
              name="password"
              placeholder="Password"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword1">
            <Form.Control
              type="password"
              name="re_password"
              placeholder="Confirm Password"
              required
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
          <Button
            variant="primary"
            type="button"
            className="login_button"
            onClick={() => {
              navigate("/login");
            }}
          >
            Login
          </Button>
        </Form>
        {/* <p class="mt-5 mb-3 text-muted">© 2022–2023</p> */}
      </div>
    </div>
  );
}

export default Signup_component;
