import React from "react"
import { Link } from "gatsby"
import "./style.css"
// import Logo from "../logo"
import Logo from "../images/wrhorizontal_white.png"
// import Header from "../header"

export default function Home() {
  return (
    <div className="app">
      <img src={Logo} alt="Wave Runners Logo" width={500} />

      <ul className="front-page-nav">
        <li>
          <a href="https://instagram.com/ocwaverunners/">Instagram </a>
        </li>
        <li>
          <Link to="/page2">About</Link>
        </li>
        <li>
          <Link to="/page2">Contact</Link>
        </li>
      </ul>
      {/* <Link to="/page2">Link.</Link> */}
    </div>
  )
}
