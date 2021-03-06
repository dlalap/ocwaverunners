import React, { useState } from "react"
import getStripe from "../../utils/stripejs"
import { useShoppingCart } from "use-shopping-cart"

const cardStyles = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-around",
  alignItems: "flex-start",
  padding: "1rem",
  marginBottom: "1rem",
  boxShadow: "5px 5px 25px 0 rgba(46,61,73,.2)",
  backgroundColor: "#fff",
  borderRadius: "6px",
  maxWidth: "300px",
}
const buttonStyles = {
  display: "block",
  fontSize: "13px",
  textAlign: "center",
  color: "#000",
  padding: "12px",
  boxShadow: "2px 5px 10px rgba(0,0,0,.1)",
  backgroundColor: "rgb(255, 178, 56)",
  borderRadius: "6px",
  letterSpacing: "1.5px",
}

const buttonDisabledStyles = {
  opacity: "0.5",
  cursor: "not-allowed",
}

const formatPrice = (amount, currency) => {
  let price = (amount / 100).toFixed(2)
  let numberFormat = new Intl.NumberFormat(["en-US"], {
    style: "currency",
    currency: currency,
    currencyDisplay: "symbol",
  })
  return numberFormat.format(price)
}

const ProductCard = (props, { product }) => {
  const [loading, setLoading] = useState(false)

  const handleSubmit = async event => {
    event.preventDefault()
    setLoading(true)

    const price = new FormData(event.target).get("priceSelect")
    const stripe = await getStripe()
    const { error } = await stripe.redirectToCheckout({
      mode: "payment",
      lineItems: [{ price, quantity: 1 }],
      // successUrl: `/page-2/`,
      // cancelUrl: `/advanced`,
      successUrl: `${props.location.href}/page-2/`,
      cancelUrl: `${props.location.href}/advanced`,
    })

    if (error) {
      console.warn("Error:", error)
      setLoading(false)
    }
  }

  const { addItem } = useShoppingCart()

  const addProductFormat = {
    name: product.name,
    description: "",
    sku: product.prices[0].id,
    price: product.prices[0].unit_amount,
    currency: product.prices[0].currency,
    image: product.images[0],
  }

  // const formattedProductInfo = [
  //   {
  //     name:
  //   }
  // ]

  return (
    <div style={cardStyles}>
      {/* <form onSubmit={handleSubmit}>
        <fieldset style={{ border: "none" }}>
          <legend>
            <h4>{product.name}</h4>
          </legend>
          <label>
            <select name="priceSelect">
              {product.prices.map(price => (
                <option key={price.id} value={price.id}>
                  {formatPrice(price.unit_amount, price.currency)}
                </option>
              ))}
            </select>
          </label>
        </fieldset>
        <button
          disabled={loading}
          style={
            loading
              ? { ...buttonStyles, ...buttonDisabledStyles }
              : buttonStyles
          }
        >
          ADD TO CART
        </button>
      </form> */}
      <h4>{product.name}</h4>
      <h4>
        currency:{" "}
        {formatPrice(product.prices[0].unit_amount, product.prices[0].currency)}
      </h4>
      <button
        onClick={() => {
          addItem(addProductFormat)
          console.log("adding product:")
          console.log(addProductFormat)
        }}
      >
        Add to cart
      </button>
    </div>
  )
}

export default ProductCard
