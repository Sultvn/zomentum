import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer>
      <div className="container">

      <ul className="top">
        <li className="top__li">
          <h1>Product</h1>
          <ul className="footer-child col1">
            <li>
              <a href="a">Features</a>
            </li>
            <li>
              <a href="a">Pricing</a>
            </li>
            <li>
              <a href="a">Integrations</a>
            </li>
            <li>
              <a href="a">Product</a>
            </li>
          </ul>
        </li>
        <li className="top__li">
          <h1>Company</h1>
          <ul className="footer-child col2">
            <li>
              <a href="a">About us</a>
            </li>
            <li>
              <a href="a">Contact Us</a>
            </li>
            <li>
              <a href="a">Submit a ticket</a>
            </li>
            <li>
              <a href="a">Privacy policy</a>
            </li>
            <li>
              <a href="a">Terms & conditions</a>
            </li>
          </ul>
        </li>
        <li className="top__li">
          <h1>Users</h1>
          <ul className="footer-child col3">
            <li>
              <a href="a">Login</a>
            </li>
            <li>
              <a href="a">Get a demo</a>
            </li>
            <li>
              <a href="a">Talk to us</a>
            </li>
            <li>
              <a href="a">Privacy policy</a>
            </li>
            <li>
              <a href="a">Terms & conditions</a>
            </li>
          </ul>
        </li>
        <li className="top__li">
          <h1>Guides</h1>
          <ul className="footer-child col4">
            <li>
              <a href="a">MSP</a>
            </li>
            <li>
              <a href="a">MSP Sales</a>
            </li>
          </ul>
        </li>
        <li className="top__li">
          <h1>Contact Us</h1>
          <ul className="footer-child col5">
            <li>
              <a href="a">Address</a>
            </li>
          </ul>
        </li>
      </ul>
      <div className="bot">
        <span className="rights">© 2020 Pactora Inc. All rights reserved.</span>
        <span className="flw">Follow us on social</span>
      </div>
      </div>

    </footer>
  );
};

export default Footer;
