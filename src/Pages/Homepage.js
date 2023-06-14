import React from "react";
import { Navbar_component } from "../Components/Navbar";
import banner_image from "../banner_image2.jpg";
import "./Homepage.css";
import Product_card from "../Components/Product_card";
import t1 from "../Components/tshirtphotos/1.jpeg";
import t2 from "../Components/tshirtphotos/2.jpeg";
import t3 from "../Components/tshirtphotos/3.jpeg";
import t4 from "../Components/tshirtphotos/4.jpeg";
import t5 from "../Components/tshirtphotos/5.jpeg";
import t6 from "../Components/tshirtphotos/6.jpeg";
import t7 from "../Components/tshirtphotos/7.jpeg";
import { Link } from "react-router-dom";
import Scrollmenu from "../Components/Scrollmenu";
function Homepage() {
  return (
    <div className="homepage">
      <div className="banner">
        <img src={banner_image} className="banner_image" alt="" />

        {/* <p className="banner_text_logo">METAVERSE</p> */}
      </div>
      <div className="Top_picks">Top Picks</div>
      <div className="scrollmenu">
        <Scrollmenu
          // products={[
          //   "hello",
          //   "hi",
          //   "howare you",
          //   "hello",
          //   "hi",
          //   "howare you",
          //   "hello",
          //   "hi",
          //   "howare you",
          //   ,
          //   "hello",
          //   "hi",
          //   "howare you",
          //   ,
          //   "hello",
          //   "hi",
          //   "howare you",
          //   ,
          //   "hello",
          //   "hi",
          //   "howare you",
          //   ,
          //   "hello",
          //   "hi",
          //   "howare you",
          //   ,
          //   "hello",
          //   "hi",
          //   "howare you",
          //   ,
          //   "hello",
          //   "hi",
          //   "howare you",
          // ]}
          products={[
            <Product_card
              image={t1}
              product_creator={"Max"}
              product_price={"499"}
              product_name={"Naruto Fox"}
              small={"small"}
            />,
            <Product_card
              image={t2}
              product_creator={"Max"}
              product_price={"499"}
              product_name={"Skull Banger"}
              small={"small"}
            />,
            <Product_card
              image={t4}
              product_creator={"John"}
              product_price={"499"}
              product_name={"Eternal love"}
              small={"small"}
            />,
            <Product_card
              image={t1}
              product_creator={"Max"}
              product_price={"499"}
              product_name={"Naruto Fox"}
              small={"small"}
            />,
            <Product_card
              image={t6}
              product_creator={"Max"}
              product_price={"499"}
              product_name={"Shut Up"}
              small={"small"}
            />,
            <Product_card
              image={t7}
              product_creator={"Sid"}
              product_price={"499"}
              product_name={"Hell fire"}
              small={"small"}
            />,
          ]}
        />
      </div>
      <div className="Top_picks">Categories</div>

      <div className="product_row">
        <Product_card
          image={t1}
          product_creator={"Max"}
          product_price={"499"}
          product_name={"Naruto Fox"}
        />
        <Product_card
          image={t2}
          product_creator={"Metaverse"}
          product_price={"499"}
          product_name={"Skull Banger"}
        />
        {/* <Product_card
          image={t3}
          creator={"Metaverse"}
          price={"499"}
          name={"3rd tshirt"}
        /> */}
      </div>
      <div className="product_row">
        <Product_card
          p_id={21}
          image={t1}
          product_creator={"Max"}
          product_price={"499"}
          product_name={"Naruto Fox"}
        />

        <Product_card
          image={t2}
          product_creator={"Metaverse"}
          product_price={"499"}
          product_name={"Skull Banger"}
        />
        {/* <Product_card
          image={t3}
          creator={"Metaverse"}
          price={"499"}
          name={"3rd tshirt"}
        /> */}
      </div>
      <div className="product_row">
        <Product_card
          image={t1}
          product_creator={"Max"}
          product_price={"499"}
          product_name={"Naruto Fox"}
        />
        <Product_card
          image={t2}
          product_creator={"Metaverse"}
          product_price={"499"}
          product_name={"Skull Banger"}
        />
        {/* <Product_card
          image={t3}
          creator={"Metaverse"}
          price={"499"}
          name={"3rd tshirt"}
        /> */}
      </div>
    </div>
  );
}

export default Homepage;
