import React, { useState } from "react"
import Modal from "react-modal"
import getStripe from "../../utils/stripejs"
import { useShoppingCart } from "use-shopping-cart"

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

const formatPrice = (amount, currency) => {
  if (amount === undefined || currency === undefined) {
    return null
  }
  let price = (amount / 100).toFixed(2)
  let numberFormat = new Intl.NumberFormat(["en-US"], {
    style: "currency",
    currency: currency,
    currencyDisplay: "symbol",
  })
  return numberFormat.format(price)
}

// const waveCheckout = async event => {
//     event.preventDefault()

//     let items =

//   for (const item in items) {
//     console.log(items[item].props)
//   }
//   setLoading(true)

// //   const price = new FormData(event.target).get("priceSelect")

//   const stripe = await getStripe()
//   const { error } = await stripe.redirectToCheckout({
//     mode: "payment",
//     lineItems: [{ price, quantity: 1 }],
//     successUrl: `${window.location.origin}/page-2/`,
//     cancelUrl: `${window.location.origin}/advanced`,
//   })

//   if (error) {
//     console.warn("Error:", error)
//     setLoading(false)
//   }
// }

Modal.setAppElement(`#___gatsby`)

function Cart() {
  var subtitle

  const [modalIsOpen, setIsOpen] = useState(false)

  function openModal() {
    setIsOpen(true)
  }
  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00"
  }

  function closeModal() {
    setIsOpen(false)
  }

  const {
    cartDetails,
    clearCart,
    redirectToCheckout,
    incrementItem,
    decrementItem,
    formattedTotalPrice,
  } = useShoppingCart()

  const waveCheckout = () => {
    console.log("calling waveCheckout()")
    for (const item in cartDetails) {
      console.log(cartDetails[item])
    }
  }

  const cartItems = []
  for (const sku in cartDetails) {
    // console.log("cartDetails:")
    // console.log(cartDetails)
    const item = cartDetails[sku]
    // console.log(`item:`)
    // console.log(item)
    cartItems.push(
      <h5>
        {item.name}
        <br />
        Price:
        <br />
        {formatPrice(item.price, item.currency)}
        <br />
        Qty:
        <br />
        <button onClick={() => decrementItem(sku)}>-</button>
        {item.quantity}
        <button onClick={() => incrementItem(sku)}>+</button>
        <br />
      </h5>
    )
  }

  return (
    <div>
      <button onClick={openModal}>Open Modal</button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Cart Modal"
      >
        <h2 ref={_subtitle => (subtitle = _subtitle)}>Shopping Cart</h2>
        {cartItems}
        {formattedTotalPrice === "$0.00" ? (
          ""
        ) : (
          <div>
            <h4>Total:</h4>
            <h5>{formattedTotalPrice}</h5>
          </div>
        )}
        <button onClick={clearCart}>clear cart</button>
        <button onClick={redirectToCheckout}>checkout</button>
        <button onClick={closeModal}>close</button>
      </Modal>
    </div>
  )
}

export default Cart
