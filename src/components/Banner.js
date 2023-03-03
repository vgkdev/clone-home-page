import React from "react";
import introImg from "../assets/images/img-intro.png";
import "./Banner.scss";

const Banner = () => {
  return (
    <div className="banner-container">
      <div className="left-content">
        <div className="intro-banner">
          <div className="title">Custom made bikes.</div>

          <div className="content">
            Electric bicycles of high precision and quality, tailor-made for the
            customer. Explore the world at your own speed with Bikcraft.
          </div>

          <button className="btn">YOUR SELCET</button>
        </div>
      </div>

      <div className="right-content">
        <img src={introImg} alt="Intro" className="img-fluid" />
      </div>
    </div>
  );
};

export default Banner;
