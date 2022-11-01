import React, { useState } from "react";
import photo from "./tshirtphotos/1.jpeg";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import "./Checkout_item.css";
import { useStateValue } from "../StateProvider";
function Checkout_item({
  p_id,
  product_image,
  product_creator,
  product_price,
  product_name,
}) {
  const [qty, setqty] = useState(1);
  const [{ basket }, dispatch] = useStateValue();

  const remove_from_basket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      item: {
        p_id: p_id,
        product_image: product_image,
        product_creator: product_creator,
        product_price: product_price,
        product_name: product_name,
      },
    });
  };
  return (
    <>
      <div className="checkout_item">
        <div className="photo_and_quantity">
          <img src={product_image} alt="" className="product_photo" />
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
                size="sm"
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
        </div>
        <div className="product_info">
          <div className="product_name">{product_name}</div>
          <div className="product_creator">@ {product_creator}</div>

          <div className="product_price">₹ {product_price}</div>
        </div>
        <div className="remove_button_container">
          <CancelOutlinedIcon
            className="remove_button"
            onClick={remove_from_basket}
          />
        </div>
      </div>
      <hr className="hr_tag" />
    </>
  );
}

export default Checkout_item;
