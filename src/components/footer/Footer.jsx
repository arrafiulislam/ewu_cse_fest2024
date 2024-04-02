import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-section">
      <div className="container footer-container">
        {/* Address COntainer */}
        <div className="address-container">
          <p className="footer-heading">Address</p> <br />
          <p className="footer-content">
            A/2, Jahurul Islam Avenue Jahurul Islam City, Aftabnagar Dhaka-1212,
            Bangladesh
          </p>
        </div>
        {/* Menu Container */}
        <div className="footer-menu-container">
          <nav className="footer-menu">
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
        {/* Contact-Container */}
        <div className="contact-container">
          <p className="footer-heading">Contact Us</p> <br />
          <p className="footer-content"> 09666775577 | Ext – 206</p> <br />
          <p className="footer-content"> +880-2-9897322</p> <br />
          <a className="email" href="cse@ewubd.edu">
            cse@ewubd.edu
          </a>
        </div>
      </div>
      <div className="footer">
        <p className="footer-text">Copyright@ 2024 East West University</p>
      </div>
    </div>
  );
};

export default Footer;
