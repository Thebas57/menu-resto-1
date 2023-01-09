import React from "react";

const Chef = () => {
  return (
    <div className="chef-container" id="chef">
      <div className="img">
        <img src="./assets/chef.png" alt="chef" />
      </div>
      <div className="chef">
        <h4>Chef's Word</h4>
        <img src="./assets/spoon.png" alt="spoon" />
        <h1>What we believe in</h1>
        <div className="detail-chef">
          <img src="./assets/quote.png" alt="quote" />
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor sit
          </span>
          <p>
            Auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget
            sit. Nulla scelerisque scelerisque congue ac consequat, aliquam
            molestie lectus eu. Congue iaculis integer curabitur semper sit
            nunc.
          </p>
          <h2>Kevin Luo</h2>
          <p>Chef & Founder</p>
          <img src="./assets/sign.png" alt="sign" className="sign"/>
        </div>
      </div>
    </div>
  );
};

export default Chef;
