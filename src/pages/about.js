import React from "react"
import Navbar from "../components/Navbar.js"
import { Controller, Scene } from "react-scrollmagic"
import { Tween, Timeline } from "react-gsap"
import styled from "styled-components"
import Footer from "../components/Footer.js"
import GroupImg from "../images/group2.jpg"
import "./style.css"

const AboutHeader = styled.header`
  height: 100vh;
`

const ParallaxStyled = styled.div`
  .section {
    height: 110vh;
  }
  .parallax {
    height: 100vh;
    position: relative;
    overflow: hidden;
    top: -10vh;

    img {
      width: 100vw;
      height: 150vh;
      object-fit: cover;
      position: absolute;
      opacity: 50%;
    }

    h1 {
      position: absolute;
      font-size: 30px;
      height: 90vh;
      width: 100vw;
      display: flex;
      justify-content: center;
      color: white;
    }
  }
`

const About = () => {
  return (
    <div>
      <Navbar />
      <ParallaxStyled>
        <Controller>
          <Scene duration="200%" triggerHook="onEnter">
            <Timeline wrapper={<div className="parallax" />}>
              <Tween position="0" from={{ yPercent: -50 }} to={{ yPercent: 0 }}>
                <img src={GroupImg} alt="Women's Small" />
              </Tween>
              <Tween
                position="0"
                from={{ top: "0%", scale: 1.0 }}
                to={{ top: "50%", scale: 1.0 }}
              >
                <h1>
                  We are easygoing music lovers and beach runners who just want
                  a good time.
                </h1>
              </Tween>
            </Timeline>
          </Scene>
        </Controller>
      </ParallaxStyled>
      <section className="about">
        <Controller>
          <Scene duration="200%" pin={true} enabled={true} triggerHook={0}>
            <div className="about-title">
              <h2>About Us</h2>
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

export default About
