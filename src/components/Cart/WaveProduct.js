import React, { useState } from "react"
import { loadStripe } from "@stripe/stripe-js"
import { graphql, StaticQuery } from "gatsby"
import { useShoppingCart } from "use-shopping-cart"
import ProductCard from "../Products/ProductCard"
import Selector from "./selector"

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

const containerStyles = {
  display: "flex",
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

  //   const redirectToCheckout = async event => {
  //     event.preventDefault()
  //     setLoading(true)

  //     const stripe = await getStripe()
  //     const { error } = await stripe.redirectToCheckout({
  //       mode: "payment",
  //       shippingAddressCollection: {
  //         allowedCountries: ["US", "CA"],
  //       },
  //       billingAddressCollection: "required",
  //       lineItems: [{ price: "price_1HHftRCwqA1nMMobyGQkek1a", quantity: 1 }],
  //       successUrl: `http://localhost:8000/page2/`,
  //       cancelUrl: `http://localhost:8000/`,
  //     })

  //     if (error) {
  //       console.warn("Error:", error)
  //       setLoading(false)
  //     }
  //   }
  return (
    // <div className="apparel-description">
    //   <div className="apparel-title">
    //     <h1 style={{ color: "white" }}>Wave Runners Athletic Shirt</h1>
    //   </div>
    //   <div className="apparel-price">
    //     <h2>$25</h2>
    //   </div>
    //   <h3>Size</h3>
    //   <ul className="shirt-size-options">
    //     <li>WS</li>
    //     <li>S</li>
    //     <li>M</li>
    //     <li>L</li>
    //   </ul>
    //   <div className="apparel-description">
    //     Champion. Available in womens' small and unisex small, medium, large,
    //     and extra large.
    //   </div>
    //   {/* Let's render our product line here for shits and giggles. */}
    //   <div>
    //     <ul>
    //       {productData.map(product => (
    //         <li>
    //           {product.name} {product.price}
    //           <button onClick={() => addItem(product)}>Add to cart</button>
    //         </li>
    //       ))}
    //     </ul>
    //     {/* And this is where we render our cart. */}
    //     <p>Number of items: {cartCount}</p>
    //     <p>Total: {totalPrice}</p>
    //     <button onClick={() => redirectToCheckout({ mode: "payment" })}>
    //       Checkout
    //     </button>
    //   </div>
    // </div>

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
            {/* {Object.keys(products).map(key => (
              <ProductCard key={products[key].id} product={products[key]} />
            ))} */}

            {/* <select name="cars" id="cars">
              <option value="tesla" onSelect={() => console.log()}>
                Volvo
              </option>
              <option value="toyota">Saab</option>
              <option value="mercedes">Mercedes</option>
              <option value="audi">Audi</option>
            </select>
            <h5>{selectedItem}</h5> */}

            <Selector props={products} />
          </div>
        )
      }}
    />
  )
}

export default WaveProduct
