import React from "react";

function Scrollmenu({ products }) {
  var results = [];
  products.forEach((product) => {
    results.push(
      <div
        className="Scrollmenu_item"
        id="Scrollmenu_item"
        style={{
          display: "inline-block",
          // position: "absolute",
          // zIndex: "999",
          // : "5vw ",

          // maxHeight: " 10vh",
          // padding: "2rem",
          // margin: "auto",
        }}
        key={product.id}
      >
        {product}
      </div>
    );
  });

  return (
    <div
      className="Scrollmenu"
      style={{ overflow: "auto", whiteSpace: "nowrap" }}
    >
      {results}
    </div>
  );
}

export default Scrollmenu;
