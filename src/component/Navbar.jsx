import React from 'react'
import './Navbar.css'

function Navbar() {
  return (
    <header>
        <nav>
            <img src="../src/assest/food.png" alt="food" />
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