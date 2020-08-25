import React from "react"
import { CartProvider, useShoppingCart } from "use-shopping-cart"
import Product from "./Product"

const productData = [
  {
    name: "Bananas",
    sku: "sku_GBJ2Ep8246qeeT",
    price: 400,
    image: "https://www.fillmurray.com/300/300",
    currency: "USD",
  },
  {
    name: "Tangerines",
    sku: "sku_GBJ2WWfMaGNC2Z",
    price: 100,
    image: "https://www.fillmurray.com/300/300",
    currency: "USD",
  },
]

const TestCart = () => {
  const { totalPrice, redirectToCheckout, cartCount } = useShoppingCart()

  return (
    <div>
      {/* Renders the products */}
      {productData.map(product => (
        <Product product={product} />
      ))}
      {/* This is where we'll render our cart */}
      <p>Number of Items: {cartCount}</p>
      <p>Total: {totalPrice}</p>
      {/* <CartItems /> */}
      {/* Redirects the user to Stripe */}
      <button onClick={() => redirectToCheckout()}>Checkout</button>
    </div>
  )
}

export default TestCart
