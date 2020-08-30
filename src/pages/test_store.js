import React from "react"
import { loadStripe } from "@stripe/stripe-js"
import { CartProvider } from "use-shopping-cart"
import TestCart from "../components/Cart/test_cart.js"

const TestStore = () => {
  return (
    <CartProvider
      stripe={loadStripe(process.env.GATSBY_STRIPE_PUBLISHABLE_KEY)}
      successUrl={`${window.location.origin}/page-2/`}
      cancelUrl={`${window.location.origin}/`}
      currency="USD"
      allowedCountries={["US", "CA"]}
      billingAddressCollection={true}
    >
      <TestCart />
    </CartProvider>
  )
}

export default TestStore
