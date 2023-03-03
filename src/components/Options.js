import React from "react";
import ImgOption from "../assets/images/img-option.png";
import "./Options.scss";

const Options = () => {
  return (
    <div className="options-container">
      <div className="title">safety</div>

      <div className="options">
        <div className="silver-option">
          <div className="header-option">
            <div className="title-option">SILVER</div>
            <div className="cost">
              $199
              <di style={{ fontSize: "10px", fontWeight: "300" }}>monthly</di>
            </div>
          </div>

          <div className="content-option">
            <div className="child">
              <img src={ImgOption} alt="" />
              <div className="text">Two exchanges per year</div>
            </div>

            <div className="child">
              <img src={ImgOption} alt="" />
              <div className="text">Technical assistance</div>
            </div>

            <div className="child">
              <img src={ImgOption} alt="" />
              <div className="text">Support 08:00 to 18:00</div>
            </div>

            <div className="child">
              <img src={ImgOption} alt="" />
              <div className="text">State coverage</div>
            </div>
          </div>

          <button className="btn">SIGN UP</button>
        </div>

        <div className="gold-option">
          <div className="header-option">
            <div className="title-option" style={{ color: "gold" }}>
              SILVER
            </div>
            <div className="cost">
              $299
              <di style={{ fontSize: "10px", fontWeight: "300" }}>monthly</di>
            </div>
          </div>

          <div className="content-option">
            <div className="child">
              <img src={ImgOption} alt="" />
              <div className="text">Five exchanges per year</div>
            </div>

            <div className="child">
              <img src={ImgOption} alt="" />
              <div className="text">Special assistance</div>
            </div>

            <div className="child">
              <img src={ImgOption} alt="" />
              <div className="text">Support 24h</div>
            </div>

            <div className="child">
              <img src={ImgOption} alt="" />
              <div className="text">National coverage</div>
            </div>

            <div className="child">
              <img src={ImgOption} alt="" />
              <div className="text">Partner discounts</div>
            </div>

            <div className="child">
              <img src={ImgOption} alt="" />
              <div className="text">Access to the Bikecraft Club</div>
            </div>
          </div>

          <button className="btn">SIGN UP</button>
        </div>
      </div>
    </div>
  );
};

export default Options;
