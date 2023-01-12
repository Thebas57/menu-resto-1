import React, { useRef } from "react";
import { BsInstagram } from "react-icons/bs";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

const Instagram = () => {
  const scrollRef = useRef();
  const scroll = (direction) => {
    const { current } = scrollRef;
    if (direction === "left") {
      current.scrollLeft -= 300;
    } else if (direction === "right") {
      current.scrollLeft += 300;
    }
  };

  return (
    <div className="instagram-container">
      <div className="insta">
        <h4>Instagram</h4>
        <img src="./assets/spoon.png" alt="spoon" className="spoon" />
        <h1>Photo Gallery</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat
          mattis ipsum turpis elit elit scelerisque egestas mu.
        </p>
        <button>View More</button>
      </div>
      <div className="carousel-container">
        <div className="carousel" ref={scrollRef}>
          <div className="photo-card">
            <img src="./assets/gallery01.png" alt="gallery" />
            <span className="icon-img">
              {" "}
              <BsInstagram />
            </span>
          </div>
          <div className="photo-card">
            <img src="./assets/gallery02.png" alt="gallery" />
            <span className="icon-img">
              {" "}
              <BsInstagram />
            </span>
          </div>
          <div className="photo-card">
            <img src="./assets/gallery03.png" alt="gallery" />
            <span className="icon-img">
              <BsInstagram />
            </span>
          </div>
          <div className="photo-card">
            <img src="./assets/gallery04.png" alt="gallery" />
            <span className="icon-img">
              <BsInstagram />
            </span>
          </div>
        </div>
        <div className="arrow-container">
          <AiOutlineArrowLeft
            className="icon-arrow"
            onClick={(e) => scroll("left")}
          />
          <AiOutlineArrowRight
            className="icon-arrow"
            onClick={(e) => scroll("right")}
          />
        </div>
      </div>
    </div>
  );
};

export default Instagram;
