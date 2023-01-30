import { EmailOutlined, Phone } from "@mui/icons-material";
import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Shoes</span>
          <span>Accessories</span>
          <span>New Arrivals</span>
        </div>
        <div className="item">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className="item">
          <h1>About</h1>
          <span>
            Powerful and unconventional — La Mode is here to redefine fashion
            and its tactics. Whether you are the aspirational go-getter, the
            classy working professional, or the devil introvert, we are here to
            style you from top-to-bottom, as you take the lead of crafting your
            life, like a complete stunner. At La Mode, we dare you to be your
            own style icon!
          </span>
        </div>
        <div className="item">
          <h1>Contact</h1>
          <div>
            <div className="iconsContainer">
              <Phone className="icons" />
              <span className="iconText">+91 01234-56789</span>{" "}
            </div>
            <div className="iconsContainer">
              <EmailOutlined className="icons" />{"  "}
              <span className="iconText">lamode@modeworld.com</span>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className="logo">La Mode</span>
          <span className="copyright">
            © Copyright 2023. All Rights Reserved
          </span>
        </div>
        <div className="right">
          <img src="/img/payment.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
