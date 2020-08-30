import React from "react"
import { loadStripe } from "@stripe/stripe-js"
import { CartProvider } from "use-shopping-cart"
import TestCart from "../components/Cart/test_cart.js"

const TestStore = props => {
  return (
    <CartProvider
      stripe={loadStripe(process.env.GATSBY_STRIPE_PUBLISHABLE_KEY)}
      // successUrl={`/page-2/`}
      // cancelUrl={`/`}
      successUrl={`${props.location.href}/page-2/`}
      cancelUrl={`${props.location.href}/`}
      currency="USD"
      allowedCountries={["US", "CA"]}
      billingAddressCollection={true}
    >
      <TestCart />
    </CartProvider>
  )
}

export default TestStore
