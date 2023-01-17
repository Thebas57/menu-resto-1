import React from "react";
import { GrFacebookOption, GrTwitter, GrInstagram } from "react-icons/gr";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="news">
        <h4>Newsletter</h4>
        <img src="./assets/spoon.png" alt="spoon" className="spoon" />
        <h1>Subscribe to Our Newsletter</h1>
        <span>And never miss latest Updates!</span>
        <div className="email">
          <input type="text" placeholder="Email Address" />
          <button>Subscribe</button>
        </div>
      </div>
      <div className="footer">
        <div className="footer-div">
          <span className="contact">Contact Us</span>
          <span className="contact-details first">
            9 W 53rd St, New York, NY 10019, USA
          </span>
          <span className="contact-details">+1 212-344-1230</span>
          <span className="contact-details">+1 212-555-1230</span>
        </div>
        <div className="footer-div">
          <h1>GERICHT</h1>
          <span className="best">
            "The best way to find yourself is to lose yourself in the service of
            others.”
          </span>
          <img src="./assets/spoon.png" alt="spoon" className="spoonfooter" />
          <div className="logo">
            <GrFacebookOption />
            <GrTwitter />
            <GrInstagram />
          </div>
          <span className="contact-details end">2021 Gerícht. All Rights reserved.</span>
        </div>
        <div className="footer-div">
          <span className="contact">Working Hours</span>
          <span className="contact-details">Monday-Friday</span>
          <span className="contact-details first">08:00 am -12:00 am</span>
          <span className="contact-details">Saturday-Sunday</span>
          <span className="contact-details">07:00am -11:00 pm</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
