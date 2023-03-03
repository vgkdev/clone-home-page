import React from "react";
import Insta from "../assets/images/instagram.png";
import FB from "../assets/images/facebook.png";
import Youtube from "../assets/images/youtube.png";

import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="top-footer">
        <div className="company">bikcraft</div>
        <div className="contact">
          <div className="title">CONTACT</div>
          <div className="content">+55 22 99999-99999</div>
          <div className="content">contact@bikcraft.com</div>
          <div className="divider" />
          <div className="content">Rua Ali Perto, 42 -Botafogo</div>
          <div className="content">Rio de Janeiro - RJ</div>
          <div className="divider" />
          <div className="social-media">
            <img src={Insta} alt="" />
            <img src={FB} alt="" />
            <img src={Youtube} alt="" />
          </div>
        </div>
        <div className="information">
          <div className="title">INFORMATION</div>
          <a href="###">Bicycles</a>
          <a href="###">Insurance</a>
          <a href="###">Contacr</a>
          <a href="###">Terms and conditions</a>
        </div>
      </div>

      <div className="end-footer">
        <p> bikcraft &copy; Some rights reserved</p>
      </div>
    </div>
  );
};

export default Footer;
