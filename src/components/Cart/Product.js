import React from "react"
import { useShoppingCart, formatCurrencyString } from "use-shopping-cart"

const Product = ({ product }) => {
  const { addItem } = useShoppingCart()

  /* A helper function that turns the price into a readable format */
  const price = formatCurrencyString({
    value: product.price,
    currency: product.currency,
    language: "en-US",
  })

  return (
    <article>
      <figure>
        <img src={product.image} alt={`${product.name}`} />
        <figcaption>{product.name}</figcaption>
      </figure>
      <p>{price}</p>

      {/* Adds the item to the cart */}
      <button
        onClick={() => addItem(product)}
        aria-label={`Add ${product.name} to your cart`}
      >
        Add to cart
      </button>
    </article>
  )
}

export default Product
