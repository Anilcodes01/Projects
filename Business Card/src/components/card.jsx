

import React, { useState } from "react";

function Card(props) {
  const { name, description, twitter, interests } = props;

  return (
    <div
      style={{
        width: "200px",
        border: "1px solid black",
        gap: "5px",
        margin: "5px",
        padding: "15px",
        background: "#EFF7FF",
      }}
      className="card"
    >
      <h2>{name}</h2>
      <p>{description}</p>
      <div className="social-links">
        {twitter && (
          <a href="{Twitter}" target="_blank" rel="noopener noreferrer">
            Twitter
          </a>
        )}
      </div>

      <div className="interests">
        <h3>Interests:</h3>
        <ul>
          {interests.map((interest, index) => {
            return <li key={index}>{interest}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default Card;
