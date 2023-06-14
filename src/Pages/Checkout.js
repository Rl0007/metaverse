import React, { useEffect, useState } from "react";
import Checkout_item from "../Components/Checkout_item";
import Button from "react-bootstrap/Button";

import "./Checkout.css";
import { useStateValue } from "../StateProvider";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

function Checkout() {
  const [{ basket }, dispatch] = useStateValue();
  const [totalprice, settotalprice] = useState(0);
  const navigate = useNavigate();

  let price_of_basket = 0;
  Object.entries(basket).map((item) => {
    price_of_basket +=
      parseFloat(item[1].product_price) * parseFloat(item[1].product_qty);
    // console.log(price_of_basket);
    // console.log(item[1].price);
  });
  // useEffect(() => {
  //   basket?.forEach(calculate);

  // }, [basket]);
  if (basket.length < 1) {
    return (
      <div className="checkout">
        <div className="cart_heading">Your Basket</div>
        <h2 style={{ textAlign: "center", marginTop: "1rem" }}>
          Add items to continue
        </h2>
      </div>
    );
  }
  return (
    <div className="checkout">
      <div className="cart_heading">Your Basket</div>

      {basket.map((item) => (
        <Checkout_item
          p_id={item.p_id}
          product_image={item.product_image}
          product_creator={item.product_creator}
          product_price={item.product_price}
          product_name={item.product_name}
          product_qty={item.product_qty}
        />
      ))}

      <div className="total_price">
        <div className="price_contents">
          <h4>Sub :-</h4>
          <p>₹ {price_of_basket}</p>
        </div>
        <hr />
        <div className="price_contents">
          <h4>Gst :-</h4>
          <p>0.00</p>
        </div>
        <hr />
        <div className="price_contents total_price">
          <h4>Total :-</h4>
          <p>₹ {price_of_basket}</p>
        </div>
      </div>

      <div className="proceed_button">
        <Button
          variant="warning "
          className="proceed_to_pay"
          onClick={() => {
            navigate("/Payment_Page", {
              state: { id: 1, price: price_of_basket },
            });
          }}
        >
          Proceed to pay
        </Button>
      </div>
    </div>
  );
}

export default Checkout;
