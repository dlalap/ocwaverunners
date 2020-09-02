import React, { useState } from "react"
import { loadStripe } from "@stripe/stripe-js"
import { graphql, StaticQuery } from "gatsby"
import { useShoppingCart } from "use-shopping-cart"
import ProductCard from "../Products/ProductCard"
import Selector from "./selector"

const containerStyles = {
  margin: "50px",
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: "space-between",
  padding: "1rem 0 1rem 0",
}

let stripePromise
const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(process.env.GATSBY_STRIPE_PUBLISHABLE_KEY)
  }
  return stripePromise
}

const WaveProduct = () => {
  const [status, setStatus] = useState("idle")
  const [loading, setLoading] = useState(false)
  const [selectedItem, setSelectedItem] = useState("Select a thing")

  const {
    totalPrice,
    cartCount,
    addItem,
    redirectToCheckout,
    cartDetails,
  } = useShoppingCart()

  return (
    <StaticQuery
      query={graphql`
        query ProductPrices {
          prices: allStripePrice(
            filter: { active: { eq: true } }
            sort: { fields: [unit_amount] }
          ) {
            edges {
              node {
                id
                active
                currency
                unit_amount
                product {
                  id
                  name
                  images
                }
              }
            }
          }
        }
      `}
      render={({ prices }) => {
        // Group prices by product
        const products = {}
        for (const { node: price } of prices.edges) {
          const product = price.product
          if (!products[product.id]) {
            products[product.id] = product
            products[product.id].prices = []
          }
          products[product.id].prices.push(price)
        }

        return (
          <div style={containerStyles}>
            <h1>Wave Runners Jersey</h1>
            <h3>Champion</h3>
            <p>
              Crush all yours goals in a tee that wicks moisture, controls
              odors, and moves with you--so nothing slows you down. This
              Champion super-fine micro-mesh tee is lightweight, soft and
              flexible for comfort that takes you from workout to weekend.
            </p>
            <Selector props={products} productFilter="Wave Runners Shirt - " />
          </div>
        )
      }}
    />
  )
}

export default WaveProduct
