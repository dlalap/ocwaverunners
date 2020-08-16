import React from "react"
import { Link } from "gatsby"
import "./style.css"
// import Logo from "../logo"
import Landing from "../components/landing"
import Navbar from "../components/Navbar.js"
import { Controller, Scene } from "react-scrollmagic"
import styled from "styled-components"
import Footer from "../components/Footer.js"

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
      <section className="about">
        <Controller>
          <Scene duration="200%" pin={true} enabled={true} triggerHook={0}>
            <div className="about-title">
              <h2>A Free Running Boot Camp in Orange County</h2>
            </div>
          </Scene>

          <div className="about-pages">
            <div>
              <h2>Project 1</h2>
              <p>
                Fugiat non et est dolor enim anim minim laboris non eiusmod. Do
                sit tempor nulla exercitation sit ullamco occaecat excepteur et
                aliqua. Cupidatat adipisicing ad exercitation labore mollit in
                do. Commodo proident incididunt deserunt culpa cupidatat Lorem
                non nulla et veniam velit nulla laboris officia. Elit nostrud id
                id nisi mollit. Velit proident consectetur quis dolor
                reprehenderit duis mollit labore aute. Proident commodo sit ut
                reprehenderit exercitation ipsum exercitation consectetur.
              </p>
            </div>
            <div>
              <h2>Project 2</h2>
              <p>
                Fugiat non et est dolor enim anim minim laboris non eiusmod. Do
                sit tempor nulla exercitation sit ullamco occaecat excepteur et
                aliqua. Cupidatat adipisicing ad exercitation labore mollit in
                do. Commodo proident incididunt deserunt culpa cupidatat Lorem
                non nulla et veniam velit nulla laboris officia. Elit nostrud id
                id nisi mollit. Velit proident consectetur quis dolor
                reprehenderit duis mollit labore aute. Proident commodo sit ut
                reprehenderit exercitation ipsum exercitation consectetur.
              </p>
            </div>
            <div>
              <h2>Project 3</h2>
              <p>
                Fugiat non et est dolor enim anim minim laboris non eiusmod. Do
                sit tempor nulla exercitation sit ullamco occaecat excepteur et
                aliqua. Cupidatat adipisicing ad exercitation labore mollit in
                do. Commodo proident incididunt deserunt culpa cupidatat Lorem
                non nulla et veniam velit nulla laboris officia. Elit nostrud id
                id nisi mollit. Velit proident consectetur quis dolor
                reprehenderit duis mollit labore aute. Proident commodo sit ut
                reprehenderit exercitation ipsum exercitation consectetur.
              </p>
            </div>
          </div>
        </Controller>
      </section>
      <Footer />
    </div>
  )
}
