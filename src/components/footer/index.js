import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";
const Footer = () => {
  return (
    <footer>
      <div className="footer-section">
        <h5>About us</h5>
        <Link to="/our-history">Our History</Link>
        <Link to="/product-care">Product Care</Link>
        <Link to="/store-location">Store Location</Link>
        <Link to="/sustainability">Sustainability</Link>
      </div>
      <div className="footer-section">
        <h5>Policy</h5>
        <Link to="/policy/shipping">Shipping & Return Policy</Link>
        <Link to="/privacy">Privacy Policy</Link>
        <Link to="/impressum">Impressum</Link>
        <Link to="/return_portal">Return Portal</Link>
      </div>
      <div className="footer-section">
        <h5>Customer Service</h5>
        <Link to="/terms">General Terms and Conditions</Link>
        <Link to="/contact">Contact Us</Link>
        <Link to="/news">News</Link>
        <Link to="/faq">FAQ</Link>
      </div>
      <div className="footer-section">
        <h5>Customer Service</h5>
        <Link to="/terms">General Terms and Conditions</Link>
        <Link to="/contact">Contact Us</Link>
        <Link to="/news">News</Link>
        <Link to="/faq">FAQ</Link>
      </div>

      <div className="footer-section transparent">
        <h5>Follow us</h5>
        <a href="#facebook">
          <img
            src={require("assets/logo/facebook.svg").default}
            alt="follow us"
          />
        </a>
        <a href="#instagram">
          <img
            src={require("assets/logo/instagram.svg").default}
            alt="follow us"
          />
        </a>
        <a href="#twitter">
          <img
            src={require("assets/logo/twitter.svg").default}
            alt="follow us"
          />
        </a>
        <a href="#youtube">
          <img
            src={require("assets/logo/youtube.svg").default}
            alt="follow us"
          />
        </a>
      </div>
      <div className="copyright">
        All content Copyright © 2020 GOBI Cashmere
      </div>
    </footer>
  );
};
export default Footer;
