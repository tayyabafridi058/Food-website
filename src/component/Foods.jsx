import React from "react";
import "../App.css";

function Foods() {
  return (
    <>
      <div className="foods">
        <h2>Explore Food</h2>
        <div className="food-content">
          <div className="food-card one">
            <p>Barger</p>
          </div>

          <div className="food-card two">
            <p>Pizza</p>
          </div>

          <div className="food-card three">
            <p>Momo</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Foods;
