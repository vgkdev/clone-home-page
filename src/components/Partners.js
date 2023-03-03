import React from "react";
import "./Partners.scss";
import Slider from "./Slider";

const Partners = () => {
  return (
    <div className="partner-container">
      <div className="title">Our partners</div>

      <Slider image={1} />
      <Slider image={2} />
    </div>
  );
};

export default Partners;
