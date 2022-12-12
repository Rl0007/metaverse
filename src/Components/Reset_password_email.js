import React, { useContext } from "react";
import AuthContext from "../AuthContext";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
function Reset_password_email() {
  const { Send_reset_password_link } = useContext(AuthContext);
  return (
    <Form onSubmit={Send_reset_password_link}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="email" name="email" placeholder="Enter email" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default Reset_password_email;
