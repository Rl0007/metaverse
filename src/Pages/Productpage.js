import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import { useLocation, useNavigate } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import "./Productpage.css";
import { useStateValue } from "../StateProvider";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import t1 from "../Components/tshirtphotos/1.jpeg";
function Productpage({
  p_id,
  product_image,
  product_name,
  product_creator,
  product_price,
}) {
  const [qty, setqty] = useState(1);
  let product_desc =
    "Our exceptional Cotton T-Shirt is a true wardrobe staple, offering unmatched comfort and versatility. Crafted with care using premium quality cotton fabric, this t-shirt boasts remarkable softness and breathability. Its timeless design and relaxed fit make it a go-to choice for any casual occasion.";
  const location = useLocation();
  const [{ basket }, dispatch] = useStateValue();
  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        p_id: location.state.p_id,
        product_image: location.state.product_image,
        product_creator: location.state.product_creator,
        product_price: location.state.product_price,
        product_name: location.state.product_name,
        product_qty: qty,
      },
    });
  };
  const navigate = useNavigate();
  return (
    <div className="product_page">
      {/* <FiArrowLeft
        className="back_arrow"
        size={30}
        onClick={() => {
          navigate(-1);
        }}
      />
      <h3 className="product_name">{location.state.product_name}</h3>
      <h4 className="product_creator">@ {location.state.product_creator}</h4> */}
      <div className="product_image_and_thumbnail">
        <img
          // src={location.state.product_image}
          src={location.state.product_image}
          className="product_image1"
          alt=""
        />
        <div className="thumbnail_images">
          <img
            src={location.state.product_image}
            className="thumbnail"
            alt=""
          />
          <img
            src={location.state.product_image}
            className="thumbnail"
            alt=""
          />
          <img
            src={location.state.product_image}
            className="thumbnail"
            alt=""
          />
          <img
            src={location.state.product_image}
            className="thumbnail"
            alt=""
          />
        </div>
      </div>
      <div className="product_info1">
        <p className="product_creator1"> {location.state.product_creator}</p>
        <p className="product_name1">{location.state.product_name}</p>
        <p className="product_desc">{product_desc}</p>

        <p className="product_price1">₹ {location.state.product_price}</p>
        <div className="input_quantity">
          <InputGroup className="mb-3">
            <Button
              variant="outline-secondary"
              id="button-addon1"
              onClick={() => {
                if (qty > 1) {
                  setqty(qty - 1);
                }
              }}
            >
              -
            </Button>

            <Form.Control
              className="quantity_number"
              aria-describedby="basic-addon1"
              // size="lg"
              type="number"
              value={qty}
              // onChange={(e) => {
              //   setqty(e.target.value);
              // }}
              readOnly={true}
            />
            <Button
              variant="outline-secondary"
              id="button-addon1"
              onClick={() => {
                if (qty < 99) {
                  setqty(qty + 1);
                }
              }}
            >
              +
            </Button>
          </InputGroup>
        </div>
        {/* <div className="button_bar">
          <ButtonToolbar aria-label="Toolbar with button groups">
            <ButtonGroup className="me-2" aria-label="First group">
              <Button className="size_button">S</Button>{" "}
              <Button className="size_button">M</Button>{" "}
              <Button className="size_button">L</Button>{" "}
              <Button className="size_button">XL</Button>
            </ButtonGroup>
          </ButtonToolbar>
        </div> */}
        <Button
          variant="warning "
          className="add_to_cart"
          onClick={addToBasket}
        >
          Add to cart
        </Button>
      </div>
    </div>
  );
}

export default Productpage;
