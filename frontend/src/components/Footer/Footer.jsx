import React from "react";
import "./Footer.css";
import assets from "../../assets/assets";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img className="footer-content-logo" src={assets.logo} alt="" />
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Praesentium excepturi, sunt nulla, expedita eveniet quod velit
            corporis in reiciendis dolores voluptatum eos ratione, id iste modi
            odio amet voluptate consequuntur.
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>Company</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>Get in touch</h2>
          <ul>
            <li>+99 99 9999-9999</li>
            <li>contact@deliva.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright {currentYear} &copy; Deliva.com - All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
