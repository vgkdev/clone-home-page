import React from "react";
import "./Technology.scss";
import vector1 from "../assets/images/vector-1.png";
import vector2 from "../assets/images/vector-2.png";
import img from "../assets/images/diferencial.png";

const Technology = () => {
  return (
    <div className="technology-container">
      <div className="left-content">
        <div className="content">
          <div className="title1">ADVANCED TECHNOLOGY</div>
          <div className="title2">You choose your colors and components.</div>

          <div className="text">
            Each Bikcraft is unique and has its own identity. The measurements
            will be exact for your body and height, ensuring greater comfort and
            ergonomics in your pedaling. You can also completely customize its
            colors.
          </div>

          <a className="link" href="###">
            CHOOSE A MODEL
          </a>

          <div className="footer-container">
            <div className="left-content-footer">
              <img src={vector1} alt="vector" />
              <div className="title">Electric Motor</div>
              <div className="text">
                Every Bikcraft is equipped with an electric motor that lasts up
                to 120 hours. The battery is recharged with your energy expended
                when pedaling.
              </div>
            </div>

            <div className="right-content-footer">
              <img src={vector2} alt="vector" />
              <div className="title">Tracker</div>
              <div className="text">
                We know how precious your Bikcraft is, so we've added tracking
                and anti-theft systems to ensure your peace of mind.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="right-content">
        <img src={img} alt="Intro" className="img-fluid" />
      </div>
    </div>
  );
};

export default Technology;
