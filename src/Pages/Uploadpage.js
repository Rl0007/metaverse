import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

import { useNavigate } from "react-router-dom";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function Uploadpage() {
  const navigate = useNavigate();
  const [file, setFile] = useState();
  function handleChange(e) {
    setFile(URL.createObjectURL(e.target.files[0]));
  }

  return (
    <div className="container">
      <h2>Add product </h2>
      <input type="file" onChange={handleChange} className="choose_file" />
      <img src={file} />

      <Form>
        <Form.Group className="mb-3" controlId="formBasicname">
          <Form.Control
            type="text"
            name="name"
            placeholder=" Product name"
            required
            style={{ marginTop: "1rem" }}
          />
        </Form.Group>

        <Form.Select category="lg">
          <option>category</option>

          <option>men</option>
          <option>women</option>
        </Form.Select>
        <br />

        <Form.Group className="mb-3" controlId="formBasicPrice">
          <Form.Control
            type="price"
            name="price"
            placeholder="Price"
            required
          />
        </Form.Group>

        {/* <Form.Group className="mb-3" controlId="formBasicDiscountPrice">
          <Form.Control
            type="discountprice"
            name="discountprice"
            placeholder="DiscountPrice"
            required
          />
        </Form.Group> */}

        <Form.Group className="mb-3" controlId="formBasicProductunit">
          <Form.Control
            type="productunit"
            name="Productunit"
            placeholder="Product unit"
            required
          />
        </Form.Group>

        <Form.Select piece="lg">
          <option>Piece</option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
          <option>6</option>
        </Form.Select>
        <br />
        <Form.Group className="mb-3" controlId="formBasicProductdetails">
          <Form.Control
            type="productdetails"
            name="productdetails"
            placeholder=" Product Details"
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      {/* <p class="mt-5 mb-3 text-muted">© 2022–2023</p> */}
    </div>
  );
}

export default Uploadpage;
