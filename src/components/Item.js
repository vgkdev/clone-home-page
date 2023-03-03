import React from "react";
import "./Item.scss";

const Item = (props) => {
  return (
    <div className="item-conatiner">
      <img src={props.imgItem} alt="bicycle" className="img-item" />

      <div className="name-container">
        <div className="point" />
        <div className="name-item">{props.name}</div>
      </div>

      <div className="cost-item">R$ {props.cost}</div>
    </div>
  );
};

export default Item;
