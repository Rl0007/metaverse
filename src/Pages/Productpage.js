import React from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import { useLocation, useNavigate } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import "./Productpage.css";
function Productpage() {
  let product_desc = "this is comfortable tshirt";
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <div className="product_page">
      <FiArrowLeft
        className="back_arrow"
        size={30}
        onClick={() => {
          navigate(-1);
        }}
      />
      <h3 className="product_name">{location.state.product_name}</h3>
      <h4 className="product_creator">@ {location.state.product_creator}</h4>
      <img
        src={location.state.product_image}
        className="product_image"
        alt=""
      />
      <h3 className="product_price">{location.state.product_price}</h3>
      <div className="button_bar">
        <ButtonToolbar aria-label="Toolbar with button groups">
          <ButtonGroup className="me-2" aria-label="First group">
            <Button className="size_button">S</Button>{" "}
            <Button className="size_button">M</Button>{" "}
            <Button className="size_button">L</Button>{" "}
            <Button className="size_button">XL</Button>
          </ButtonGroup>
        </ButtonToolbar>
      </div>
      <p className="product_desc">{product_desc}</p>
      <Button variant="warning " className="add_to_cart">
        Add to cart
      </Button>
    </div>
  );
}

export default Productpage;
