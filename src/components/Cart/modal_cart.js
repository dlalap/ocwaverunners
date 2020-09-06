import React, { useState } from "react"
import Modal from "react-modal"
import styled from "styled-components"
import getStripe from "../../utils/stripejs"
import { useShoppingCart } from "use-shopping-cart"
import AddIcon from "@material-ui/icons/Add"
import RemoveIcon from "@material-ui/icons/Remove"
import CloseIcon from "@material-ui/icons/Close"
import { Button, IconButton, makeStyles } from "@material-ui/core"
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles"
import Divider from "@material-ui/core/Divider"

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    minWidth: "300px",
    minHeight: "500px",
    zIndex: 2147483647,
  },
}

const ViewCart = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Jost:wght@500&display=swap");
  font-family: "Jost", sans-serif;
  text-decoration: none;
  color: #fff;
  display: inline-block;
  white-space: nowrap;
  margin: 0 1vw;
  transition: all 200ms ease-in;
  position: relative;

  :after {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 0%;
    content: ".";
    color: transparent;
    background: #30c8ff;
    height: 1px;
    transition: all 0.4s ease-in;
  }

  :hover {
    color: #30c8ff;
    ::after {
      width: 100%;
    }
    cursor: pointer;
  }
`

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

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 180,
    background: "white",
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  root: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    borderRadius: 3,
    border: 0,
    color: "white",
    height: 48,
    padding: "0 30px",
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    margin: theme.spacing(1),
  },
}))

const theme = createMuiTheme({
  palette: {
    primary: { main: "#30c8ff" },
  },
})

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

const Cart = props => {
  const classes = useStyles()

  var subtitle

  const [modalIsOpen, setIsOpen] = useState(false)

  function openModal() {
    setIsOpen(true)
  }
  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#333"
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
    cartCount,
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
    console.log(item.image)

    cartItems.push(
      <div className="cart-items" key={item.sku}>
        <div className="cart-item">
          {item.image !== undefined ? (
            <img src={item.image} />
          ) : (
            <img src="https://www.fillmurray.com/300/300" />
          )}
          <div className="cart-item-details">
            <h5>{item.name}</h5>
            <h5>{formatPrice(item.price, item.currency)}</h5>

            <IconButton onClick={() => decrementItem(sku)}>
              <RemoveIcon />
            </IconButton>
            {item.quantity}
            <IconButton onClick={() => incrementItem(sku)}>
              <AddIcon />
            </IconButton>
          </div>
        </div>
        <hr />
      </div>
    )
  }

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Cart Modal"
      >
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            width: "90%",
            position: "absolute",
          }}
        >
          <IconButton onClick={closeModal}>
            <CloseIcon />
          </IconButton>
        </div>
        <h2 ref={_subtitle => (subtitle = _subtitle)}>
          Your Cart{cartCount ? " (" + cartCount + ")" : ""}
        </h2>
        {cartCount ? (
          cartItems
        ) : (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <h3>It's empty!</h3>
            <p>
              <i>
                Return to the store and
                <br />
                add stuff to your cart!
              </i>
            </p>
          </div>
        )}
        {formattedTotalPrice === "$0.00" ? (
          ""
        ) : (
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <h4>
              Total: <b>{formattedTotalPrice}</b>
            </h4>
          </div>
        )}
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-evenly",
          }}
        >
          <Button variant="contained" color="secondary" onClick={clearCart}>
            clear cart
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={redirectToCheckout}
          >
            checkout
          </Button>
        </div>
      </Modal>

      <Button
        classes={{ root: classes.root }}
        variant="contained"
        color="primary"
        onClick={openModal}
      >
        VIEW CART{cartCount ? " (" + cartCount + ")" : ""}
      </Button>
    </div>
  )
}

export default Cart
