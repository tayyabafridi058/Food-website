import React from 'react'
import './Navbar.css'
import logo from "../assest/food.png"

function Navbar() {
  return (
    <header>
        <nav>
            <img src={logo} alt="food" />
            <ul>
                <a href="#"><li>Home</li></a>
                <a href="#"><li>About</li></a>
                <a href="#"><li>Food</li></a>
                <a href="#"><li>Contact</li></a>
            </ul>
        </nav>
    </header>
  )
}

export default Navbar