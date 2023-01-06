import React from "react";

const Home = () => {
  return (
    <div className="home-container" id="home">
      <div className="hashtag">
        <span>#Bar #Gericht</span>
      </div>
      <div className="info-home">
        <span>Chose The New Flavour</span>
        <img src="./assets/spoon.png" alt="spoon" />
        <h1>
          The Key To <br />
          Fine Dining
        </h1>
        <p>
          Sit tellus lobortis sed senectus vivamus molestie. Condimentum
          volutpat morbi facilisis quam scelerisque sapien. Et, penatibus
          aliquam amet tellus
        </p>
        <button>Explore Menu</button>
      </div>
      <div className="img-home">
        <img src="./assets/welcome.png" alt="welcome" />
      </div>
      <div className="scroll">
        <span className="trait"></span>
        <span>SCROLL</span>
      </div>
      <div className="footer-home">
        01 - 02 03 04
      </div>
    </div>
  );
};

export default Home;
