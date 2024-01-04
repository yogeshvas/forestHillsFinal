// Spinner.js
import React from "react";
import "./Spinner.css"; // Import the styles

const Spinner = () => {
  return (
    <div className="loader">
      {Array(25)
        .fill(null)
        .map((_, index) => (
          <div className="window" key={index}></div>
        ))}
      <div className="door"></div>
      <div className="hotel-sign">
        <span>F</span>
        <span>O</span>
        <span>R</span>
        <span>E</span>
        <span>S</span>
        <span>T</span>
      </div>
    </div>
  );
};

export default Spinner;
