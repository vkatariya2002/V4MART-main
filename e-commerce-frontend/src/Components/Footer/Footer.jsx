import React from "react";
import "./Footer.css";

import footer_logo from "../Assets/logo_big.png";
import instagram_icon from "../Assets/instagram_icon.png";
import pintrest_icon from "../Assets/pintester_icon.png";
import whatsapp_icon from "../Assets/whatsapp_icon.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-logo">
        <img src={footer_logo} alt="" />
        <p>V4Mart</p>
      </div>
      <ul className="footer-links">
        <li>
          <Link to="/products" style={{ textDecoration: "none" }}>
            Products
          </Link>
        </li>
        <li>
          <Link to="/about" style={{ textDecoration: "none" }}>
            About
          </Link>
        </li>
        <li>
          <Link to="/contact" style={{ textDecoration: "none" }}>
            Contact
          </Link>
        </li>
      </ul>
      <div className="footer-social-icons">
        <a className="footer-icons-container" href="#">
          <img src={instagram_icon} alt="" />
        </a>
        <a className="footer-icons-container" href="#">
          <img src={pintrest_icon} alt="" />
        </a>
        <a className="footer-icons-container" href="#">
          <img src={whatsapp_icon} alt="" />
        </a>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>Copyright @ 2023 - All Right Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
