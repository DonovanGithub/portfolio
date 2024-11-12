import React from "react";
import arrowsvg from "../assets/scroll-svgrepo-com.svg";
const Windows = ({ image }) => {
  return (
    <section className="windows-center">
      <div className="windows-img-box">
        <img src={image} alt={"projet"}></img>
      </div>
      <img className="arrow-svg" src={arrowsvg} alt="arrow"></img>
    </section>
  );
};

export default Windows;
