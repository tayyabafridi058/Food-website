import React from "react";
import "../App.css";

function Home() {
  return (
    <>
      <div className="home-page">
        <div className="home-content">
          <div className="content">
            <input type="text" name="text" placeholder="Search food"/>
            <button>Search</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
