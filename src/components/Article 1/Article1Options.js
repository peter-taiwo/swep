import React from "react";

export const Article1Options = ({ img, head, body }) => {
  return (
    <div>
      <img className="article1-service-icon" src={img} alt="icon" />
      <div className="article1-service-details">
        <h2>{head}</h2>
        <p>{body}</p>
      </div>
    </div>
  );
};