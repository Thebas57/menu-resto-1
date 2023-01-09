import React from "react";

const About = () => {
  return (
    <div className="about-container" id="about">
      <div className="img-g">
        <img src="./assets/G.png" alt="g" />
      </div>
      <div className="aboutus aboutdiv">
        <h3>About Us</h3>
        <img src="./assets/spoon.png" alt="spoonleft" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra
          adipiscing ultrices vulputate posuere tristique. In sed odio nec
          aliquet eu proin mauris et.
        </p>
        <button>Know More</button>
      </div>
      <div className="img-knife">
        <img src="./assets/knife.png" alt="knife" />
      </div>
      <div className="history aboutdiv">
        <h3>Our History</h3>
        <img src="./assets/spoon.png" alt="spoonright" />
        <p>
          Adipiscing tempus ullamcorper lobortis odio tellus arcu volutpat.
          Risus placerat morbi volutpat habitasse interdum mi aliquam In sed
          odio nec aliquet.
        </p>
        <button>Know More</button>
      </div>
    </div>
  );
};

export default About;
