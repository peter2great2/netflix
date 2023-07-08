import React, { useEffect, useState } from "react";
import image from "./myImage/image1.jpg";
import "./Nav.css";

function Nav() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
  }, []);
  return (
    <div className={`nav ${show && "navbar_black"}`}>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Netflix_2014_logo.svg/640px-Netflix_2014_logo.svg.png"
        alt="netflix logo"
        className="nav_logo"
      />
      <img src={image} alt="user" className="user_logo" />
    </div>
  );
}

export default Nav;
