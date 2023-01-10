import React from "react";

const Instagram = () => {
  return (
    <div className="instagram-container">
      <div className="insta">
        <h4>Instagram</h4>
        <img src="./assets/spoon.png" alt="spoon" />
        <h1>Photo Gallery</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat
          mattis ipsum turpis elit elit scelerisque egestas mu.
        </p>
        <button>View More</button>
      </div>
      <div className="carousel">
        <div className="img-carou">
            <img src="./assets/gallery01.png" alt="" />
            <span>test</span>
        </div>
        <div className="img-carou">
            <img src="./assets/gallery02.png" alt="" />
            <span>test</span>
        </div>
        <div className="img-carou">
            <img src="./assets/gallery03.png" alt="" />
            <span>test</span>
        </div>
        <div className="img-carou">
            <img src="./assets/gallery04.png" alt="" />
            <span>test</span>
        </div>
      </div>
    </div>
  );
};

export default Instagram;
