import React from "react";
import "./Footer.css";
import assets from "../../assets/assets";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer" id="footer">
      <div className="footer__content">

        <div className="footer__column">
          <img className="footer__logo" src={assets.logo} alt="Deliva logo" />
          <p className="footer__description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Praesentium expedita quod velit corporis in reiciendis 
            eos ratione odio voluptate consequuntur.
          </p>

          <div className="footer__social">
            <img src={assets.facebook_icon} alt="Facebook" />
            <img src={assets.twitter_icon} alt="Twitter" />
            <img src={assets.linkedin_icon} alt="LinkedIn" />
          </div>
        </div>

        <div className="footer__column">
          <h2 className="footer__title">Company</h2>
          <ul className="footer__list">
            <li>Home</li>
            <li>About us</            li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>

        <div className="footer__column">
          <h2 className="footer__title">Get in touch</h2>
          <ul className="footer__list">
            <li>+99 99 9999-9999</li>
            <li>contact@deliva.com</li>
          </ul>
        </div>
      </div>

      <hr className="footer__divider" />

      <p className="footer__copyright">
        &copy; {year} Deliva — All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
