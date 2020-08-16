import React from "react"
import styled from "styled-components"
import Navbar from "../components/Navbar.js"
import Footer from "../components/Footer.js"
import { Controller, Scene } from "react-scrollmagic"
import { Tween, Timeline } from "react-gsap"
import { Carousel } from "react-responsive-carousel"
import Button from "@material-ui/core/Button"
import "react-responsive-carousel/lib/styles/carousel.min.css"

const ParallaxStyled = styled.div`
  .section {
    height: 110vh;
  }
  .parallax {
    height: 100vh;
    position: relative;
    overflow: hidden;

    img {
      width: 100vw;
      height: 150vh;
      object-fit: cover;
      position: absolute;
    }

    h1 {
      position: absolute;
      font-size: 100px;
      height: 90vh;
      width: 100vw;
      display: flex;
      justify-content: center;
      color: white;
    }
  }
`

// const images = () => {
//   return (
//     <div>
//       <img src="http://localhost:5500/src/images/apparel/womens_small_1.jpg" />
//       <p className="legend">Legend 1</p>
//       <img src="http://localhost:5500/src/images/apparel/mens_large.jpg" />
//       <p className="legend">Legend 1</p>
//       <img src="http://localhost:5500/src/images/apparel/mens_medium.jpg" />
//       <p className="legend">Legend 1</p>
//     </div>
//   )
// }

const Apparel = () => {
  return (
    <ParallaxStyled>
      <Controller>
        <Navbar />
        {/* <div className="apparel-header">
          <h1>Apparel</h1>
        </div> */}
        <Scene duration="200%" triggerHook="onEnter">
          <Timeline wrapper={<div className="parallax" />}>
            <Tween position="0" from={{ yPercent: -50 }} to={{ yPercent: 0 }}>
              <img
                src="http://localhost:5500/src/images/apparel/womens_small_1.jpg"
                alt="Women's Small"
              />
            </Tween>
            <Tween
              position="0"
              from={{ top: "0%", scale: 1.0 }}
              to={{ top: "50%", scale: 1.0 }}
            >
              <h1>Apparel</h1>
            </Tween>
          </Timeline>
        </Scene>

        <div className="apparel-body">
          <Carousel className="apparel-carousel">
            <div>
              <img src="http://localhost:5500/src/images/apparel/mens_medium.jpg" />
              <p className="legend">Unisex Medium</p>
            </div>
            <div>
              <img src="http://localhost:5500/src/images/apparel/womens_small_1.jpg" />
              <p className="legend">Women's Small</p>
            </div>
            <div>
              <img src="http://localhost:5500/src/images/apparel/mens_large.jpg" />
              <p className="legend">Men's Large</p>
            </div>
          </Carousel>
          <div className="apparel-description">
            <div className="apparel-title">
              <h1 style={{ color: "white" }}>Wave Runners Athletic Shirt</h1>
            </div>
            <div className="apparel-price">
              <h2>$24.99</h2>
            </div>
            <div className="apparel-description">
              Champion. Available in womens' small and unisex small, medium,
              large, and extra large.
            </div>

            <Button variant="containedPrimary">Get it!</Button>
          </div>
        </div>

        <Footer />
      </Controller>
    </ParallaxStyled>
  )
}

export default Apparel
