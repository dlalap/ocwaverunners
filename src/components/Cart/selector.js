import React, { useState } from "react"
import { useShoppingCart } from "use-shopping-cart"

const Selector = props => {
  const { addItem } = useShoppingCart()
  const [product, selectProduct] = useState("default")
  const [quantity, setQuantity] = useState(0)

  const addProductFormat = selectedProduct => ({
    name: selectedProduct.name,
    description: "",
    sku: selectedProduct.prices[0].id,
    price: selectedProduct.prices[0].unit_amount,
    currency: selectedProduct.prices[0].currency,
    image: selectedProduct.images[0],
  })

  const handleChange = e => {
    e.preventDefault()
    if (productEntries === "undefined") {
      return
    }

    const formattedProduct = addProductFormat(productEntries[e.target.value])

    selectProduct(formattedProduct)
    console.log(`current product:`)
    console.log(product)
  }

  const productEntries = []
  for (const item in props.props) {
    productEntries.push(props.props[item])
  }

  const changeQuantity = dir => {
    if (dir === -1) {
      setQuantity(Math.max(0, quantity - 1))
    } else if (dir === 1) {
      setQuantity(Math.min(5, quantity + 1))
    }
  }

  return (
    <div>
      <select onChange={handleChange}>
        <option key={-1} value="none" selected disabled hidden>
          Select a size
        </option>
        {productEntries.map((option, index) => (
          <option key={index} value={index}>
            {option.name}
          </option>
        ))}
      </select>
      <div>
        <p>Set Quantity</p>
        <button onClick={() => changeQuantity(-1)}>-</button> {quantity}{" "}
        <button onClick={() => changeQuantity(1)}>+</button>
      </div>
      <button onClick={() => addItem(product, quantity)}>Add to Cart</button>
    </div>
  )
}

export default Selector
