import React from "react"
import { Link } from "gatsby"
import "./style.css"
// import Logo from "../logo"
import Landing from "../components/landing"
import Navbar from "../components/Navbar.js"
import { Controller, Scene } from "react-scrollmagic"
import styled from "styled-components"
import Footer from "../components/Footer.js"
import { shadows } from "@material-ui/system"

const HeaderDivider = styled.div`
  height: 100px;
  background-color: #333;
`

export default function Home() {
  return (
    <div className="not-app">
      <Navbar />
      <Landing />
      {/* <HeaderDivider></HeaderDivider> */}
      <section className="front-page">
        <div class="big-box">
          <div class="box">
            <h1>Our group runs are postponed until further notice.</h1>
            <Link to="/runwithus">
              <p>Learn more {`>`}</p>
            </Link>
          </div>
          <div class="box">
            <h1>Athletic shirts available for contactless delivery.</h1>
            <Link to="/wavestore">
              <p>Buy {`>`}</p>
            </Link>
          </div>
          <div class="box">
            <h1>Welcome to our new website!</h1>
            <Link to="/about">
              <p>Learn more {`>`}</p>
            </Link>
          </div>
          <div class="box">
            <h1>Follow us on Instagram.</h1>
            <Link to="https://instagram.com/ocwaverunners">
              <p>Go to Instagram {`>`}</p>
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
