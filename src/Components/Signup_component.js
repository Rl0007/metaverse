import React from "react";
import "./Signup_component.css";
import meta_logo from "./meta_logo_3.png";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

function Signup_component() {
  const navigate = useNavigate();
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
        {/* <p
          style={{ fontSize: "50px" }}
          onClick={() => {
            navigate("/");
          }}
        >
          Metaverse
        </p> */}
        <h1 className="sign_up">Please sign up</h1>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword1">
            <Form.Control type="password" placeholder="Confirm Password" />
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
