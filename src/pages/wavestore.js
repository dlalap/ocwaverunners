import React, { useState } from "react"
import styled from "styled-components"
import Navbar from "../components/Navbar.js"
import Footer from "../components/Footer.js"
import { Controller, Scene } from "react-scrollmagic"
import { Tween, Timeline } from "react-gsap"
import { Carousel } from "react-responsive-carousel"
import Button from "@material-ui/core/Button"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import Checkout from "../components/checkout.js"
import ShirtFront from "../images/apparel/WRShirtFront.jpg"
import ShirtBack from "../images/apparel/WRShirtBack.jpg"
import Shirt_UnisexMedium from "../images/apparel/unisex_shirt_medium.jpg"
import Shirt_UnisexLarge from "../images/apparel/unisex_shirt_large.jpg"
import Shirt_WomensSmall from "../images/apparel/womens_shirt_small.jpg"
import Shirt_WomensSmall_Full from "../images/apparel/womens_small_1.jpg"
import { loadStripe } from "@stripe/stripe-js"
import { CartProvider, useShoppingCart } from "use-shopping-cart"
import WaveProduct from "../components/Cart/WaveProduct"
import Cart from "../components/Cart/modal_cart"
import Modal from "react-modal"
import "./style.css"
import useWindowSize from "../utils/windowsize"

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
}

Modal.setAppElement(`#___gatsby`)

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

const WaveStore = props => {
  let subtitle

  const {
    totalPrice,
    redirectToCheckout,
    cartCount,
    addItem,
  } = useShoppingCart()
  const [shirtSize, setShirtSize] = useState(2)
  const [modalIsOpen, setIsOpen] = useState(false)

  const openModal = () => {
    setIsOpen(true)
  }

  const afterOpenModal = () => {
    subtitle.style.color = "#f00"
  }

  const closeModal = () => {
    setIsOpen(false)
  }

  const windowSize = useWindowSize()

  return (
    <CartProvider
      stripe={loadStripe(process.env.GATSBY_STRIPE_PUBLISHABLE_KEY)}
      mode="client-only"
      successUrl={`${props.location.href}/page-2/`}
      cancelUrl={`${props.location.href}/`}
      currency="USD"
      allowedCountries={["US", "CA"]}
      billingAddressCollection={true}
    >
      <div className="parallax-styled">
        <Controller>
          <Navbar />
          <Scene duration="200%" triggerHook="onEnter">
            <Timeline wrapper={<div className="parallax" />}>
              <Tween position="0" from={{ yPercent: -50 }} to={{ yPercent: 0 }}>
                <img src={Shirt_WomensSmall_Full} alt="Women's Small" />
              </Tween>
              <Tween
                position="0"
                from={{ top: "0%", scale: 1.0 }}
                to={{ top: "40%", scale: 1.0 }}
              >
                <h1>Apparel</h1>
              </Tween>
            </Timeline>
          </Scene>
          <div className="apparel-body">
            {/* <Cart /> */}
            <div className="apparel-section">
              <Carousel
                className="apparel-carousel"
                showThumbs={windowSize.width > 767.98}
              >
                <div>
                  <img src={ShirtFront} alt="shirt front" />
                </div>
                <div>
                  <img src={ShirtBack} alt="shirt back" />
                </div>
                <div>
                  <img src={Shirt_UnisexMedium} alt="unisex medium running" />
                </div>
                <div>
                  <img src={Shirt_WomensSmall} alt="women's small" />
                </div>
                <div>
                  <img src={Shirt_UnisexLarge} alt="unisex large squatting" />
                </div>
              </Carousel>
              <WaveProduct />
            </div>
          </div>

          <Footer />
        </Controller>
      </div>
    </CartProvider>
  )
}

export default WaveStore
