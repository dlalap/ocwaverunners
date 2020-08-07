import React from "react"
import { Link } from "gatsby"
import "./style.css"
// import Logo from "../logo"
import Landing from "../components/landing"
import Navbar from "../components/Navbar.js"

export default function Home() {
  return (
    <div className="not-app">
      <Navbar />
      <div className="landing">
        <Landing />
      </div>
    </div>
  )
}
