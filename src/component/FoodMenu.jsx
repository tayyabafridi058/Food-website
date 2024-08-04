import React from "react";
import "../App.css";
import imgOne from "../assest/qqq.jpeg"
import imgtwo from "../assest/eee.jpeg"
import imgthree from "../assest/ff.jpeg"
import imgfour from "../assest/fffff.jpeg"
import imgfive from "../assest/rrr.jpeg"
import imgsix from "../assest/qqq.jpeg"

function FoodMenu() {
  return (
    <>
      <div className="food-menu">
        <h2>Food Menu</h2>
        <div className="food-menu-content">


          <div className="menu-card">
            <img
              src={imgOne}
              alt="back"
              style={{ width: "110px", height: "110px", borderRadius: "12px" }}
            />
            <div className="card-cont">
              <h3>Nice Barger</h3>
              <h3>$2.3</h3>
              <p>Lorem ipsum dolor.</p>
              <button>Order Now</button>
            </div>
          </div>



          <div className="menu-card">
            <img
              src={imgtwo}
              alt="back"
              style={{ width: "110px", height: "110px", borderRadius: "12px" }}
            />
            <div className="card-cont">
              <h3>Food Title</h3>
              <h3>$2.3</h3>
              <p>Lorem ipsum dolor </p>
              <button>Order Now</button>
            </div>
          </div>



          <div className="menu-card">
            <img
              src={imgthree}
              alt="back"
              style={{ width: "110px", height: "110px", borderRadius: "12px" }}
            />
            <div className="card-cont">
              <h3>Food Title</h3>
              <h3>$2.3</h3>
              <p>Lorem ipsum dolor.</p>
              <button>Order Now</button>
            </div>
          </div>



          <div className="menu-card">
            <img
              src={imgfour}
              alt="back"
              style={{ width: "110px", height: "110px", borderRadius: "12px" }}
            />
            <div className="card-cont">
              <h3>Food Title</h3>
              <h3>$2.3</h3>
              <p>Lorem ipsum dolor.</p>
              <button>Order Now</button>
            </div>
          </div>



          <div className="menu-card">
            <img
              src={imgfive}
              alt="back"
              style={{ width: "110px", height: "110px", borderRadius: "12px" }}
            />
            <div className="card-cont">
              <h3>Food Title</h3>
              <h3>$2.3</h3>
              <p>Lorem ipsum dolor.</p>
              <button>Order Now</button>
            </div>
          </div>



          <div className="menu-card">
            <img
              src={imgsix}
              alt="back"
              style={{ width: "110px", height: "110px", borderRadius: "12px" }}
            />
            <div className="card-cont">
              <h3>Food Title</h3>
              <h3>$2.3</h3>
              <p>Lorem ipsum dolor.</p>
              <button>Order Now</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FoodMenu;
