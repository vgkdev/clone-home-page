import React from "react";
import Item from "./Item";
import bicycle1 from "../assets/images/bicicleta1.png";
import bicycle2 from "../assets/images/bicicleta2.png";
import bicycle3 from "../assets/images/bicicleta3.png";
import "./Product.scss";

const Product = () => {
  return (
    <div className="product-container">
      <div className="product-title">Your choose</div>

      <div className="gallery">
        <Item imgItem={bicycle1} name={"Magic Migth"} cost={2499} />
        <Item imgItem={bicycle2} name={"Nimbus Stark"} cost={4909} />
        <Item imgItem={bicycle3} name={"Nebula Cosmic"} cost={3999} />
      </div>
    </div>
  );
};

export default Product;
