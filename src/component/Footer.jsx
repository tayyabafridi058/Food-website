import React from 'react'
import "../App.css"
import facebook from "../assest/facebook.png"
import instagram from "../assest/linkedin.png"
import linkedin from "../assest/twitter.png"


function Footer() {
  return (
    <footer>
        <div className="social">
            <img src={facebook} alt="" />
            <img src={linkedin} alt="" />
            <img src={instagram} alt="" />
        </div>
        <p>&copy;Copyright by Tayyab Afridi</p>
    </footer>
  )
}

export default Footer