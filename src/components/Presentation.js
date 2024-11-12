import React from "react";

const Presentation = ({ title, text, text2 }) => {
  return (
    <div>
      <div className="booky-container">
        <h1 className="booky-title">{title}</h1>
        <p className="booky-explanation">{text}</p>
        <p className="booky-explanation">{text2}</p>
      </div>
    </div>
  );
};

export default Presentation;
