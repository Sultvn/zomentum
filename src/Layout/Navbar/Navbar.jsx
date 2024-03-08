// Navbar.js
import React, { useState } from "react";
import { FaBars, FaUser } from "react-icons/fa";
import "./Navbar.scss";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`navbar ${isOpen ? "open" : ""}`}>
      <div className="logo">
        <a href="a">
          <img src="/images/logo.svg" alt="" />
        </a>
      </div>
      <div className="menu-icon" onClick={toggleNavbar}>
        <FaBars className="bar" />
      </div>
      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
        <li>
          <a className="link" href="a">
            Features
          </a>
        </li>
        <li>
          <a className="link" href="a">
            Integrations
          </a>
        </li>
        <li>
          <a className="link" href="a">
            Pricing
          </a>
        </li>
        <li>
          <a className="link" href="a">
            Company
          </a>
        </li>
        <li>
          <a className="link" href="a">
            Blog
          </a>
        </li>
        <li>
          <a className="link get" href="a">
            Get a Demo
          </a>
        </li>
        <li>
          <a className="link" href="a">
            <FaUser />
            Login
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
