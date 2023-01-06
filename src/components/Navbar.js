import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdRestaurant } from "react-icons/io";

const Navbar = () => {
  const [displayMenu, setDisplayMenu] = useState(false);

  //toggle le menu (mobile)
  const handleMenu = () => {
    setDisplayMenu(!displayMenu);
  };

  return (
    <div className="navbar">
      {!displayMenu ? (
        <>
          <div className="logo">
            <img src="./assets/gericht.png" alt="logo-nav" />
          </div>
          <div className="navigation">
            <span>
              <a href="#home">Home</a>
            </span>
            <span>
              <a href="#pages">Pages</a>
            </span>
            <span>
              <a href="#Contactus">Contact Us</a>
            </span>
            <span>
              <a href="#Blog">Blog</a>
            </span>
            <span>
              <a href="#landing">Landing</a>
            </span>
          </div>
          <div className="register">
            <a href="#log">Log In / Registration</a>
            <span className="vertical-bar"></span>
            <a href="#book">Book Table</a>
          </div>
          <div className="toggleBurger">
            <GiHamburgerMenu onClick={() => handleMenu()} />
          </div>
        </>
      ) : (
        <div className="navbar-mobile slide-bottom">
          <ul>
            <li>
              {" "}
              <a href="#home">Home</a>
            </li>
            <li>
              {" "}
              <a href="#pages">Pages</a>
            </li>
            <li>
              {" "}
              <a href="#Contactus">Contact Us</a>
            </li>
            <li>
              {" "}
              <a href="#Blog">Blog</a>
            </li>
            <li>
              {" "}
              <a href="#landing">Landing</a>
            </li>
          </ul>
          <IoMdRestaurant onClick={() => handleMenu()} />
        </div>
      )}
    </div>
  );
};

export default Navbar;
