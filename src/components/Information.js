import React from "react";

const Information = ({ text }) => {
  return (
    <article className="information_bubble">
      <h2>{text}</h2>
    </article>
  );
};

export default Information;
