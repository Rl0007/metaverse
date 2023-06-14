import React from "react";
import "./Product_card.css";
import { Link, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { useStateValue } from "../StateProvider";

function Product_card({
  p_id,
  image,
  product_name,
  product_creator,
  product_price,
  small,
}) {
  const navigate = useNavigate();
  const [{ basket }, dispatch] = useStateValue();

  const to_product_page = () => {
    navigate("/product", {
      state: {
        p_id: p_id,
        product_image: image,
        product_creator: product_creator,
        product_price: product_price,
        product_name: product_name,
      },
    });
  };
  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        p_id: p_id,
        product_image: image,
        product_creator: product_creator,
        product_price: product_price,
        product_name: product_name,
        product_qty: 1,
      },
    });
  };
  return (
    <div
      className="product_container"
      style={{ width: small == "small" ? "20vw" : "48vw" }}
    >
      {/* <Link
        to={{
          pathname: "/product",
          product_image: image,
          product_creator: product_creator,
          product_price: product_price,
          product_name: product_name,
        }}
      ></Link> */}
      <img
        src={image}
        className="product_image"
        alt=""
        onClick={() => {
          to_product_page();
        }}
      />
      {/* </Link> */}

      <p className="product_name">{product_name}</p>
      <p className="product_creator">@ {product_creator}</p>
      <p className="product_price">₹ {product_price}</p>
      <Button variant="warning " className="Add_to_cart" onClick={addToBasket}>
        Add to cart
      </Button>
    </div>
  );
}

export default Product_card;
