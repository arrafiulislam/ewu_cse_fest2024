import React from "react";
import "./Header.css";
import ewuCseLogo from "./../../assets/logo/ewu_cse-removebg-preview.png";

const Header = () => {
  return (
    <div className=" header-section">
      <div className="container header-container">
        <div className="logo-container">
          <a href="">
            <img src={ewuCseLogo} alt="" className="cse_logo" />
          </a>
        </div>
        <nav className="nav-menu">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Organizer</a>
            </li>
            <li>
              <a href="#">Registration</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
