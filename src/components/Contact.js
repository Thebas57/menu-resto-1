import React from "react";

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact">
        <h4>Contact</h4>
        <img src="./assets/spoon.png" alt="spoon" className="spoon" />
        <h1>Find Us</h1>
        <p>Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 7SG</p>
        <span className="hours">Opening Hours</span>
        <span className="detail-hours">Mon - Fri: 10:00 am - 02:00 am</span>
        <span className="detail-hours">Sat - Sun: 10:00 am - 03:00 am</span>
        <button>Visit Us</button>
      </div>
      <div className="contact-img">
        <img src="./assets/findus.png" alt="findus" />
      </div>
    </div>
  );
};

export default Contact;
