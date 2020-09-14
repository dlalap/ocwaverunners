import React, { useState } from "react"
import { useShoppingCart } from "use-shopping-cart"
import {
  Select,
  MenuItem,
  makeStyles,
  FormControl,
  FormHelperText,
  Button,
  Icon,
  IconButton,
} from "@material-ui/core"

import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles"
import Cart from "./modal_cart"
import RemoveIcon from "@material-ui/icons/Remove"
import AddIcon from "@material-ui/icons/Add"
import { green, purple, teal } from "@material-ui/core/colors"

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 250,
    background: "white",
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  root: {
    background: "linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)",
    borderRadius: 3,
    border: 0,
    color: "white",
    height: 48,
    padding: "0 30px",
    boxShadow: "0 3px 5px 2px rgba(33, 203, 243, .3)",
    margin: theme.spacing(1),
  },
}))

const theme = createMuiTheme({
  palette: {
    primary: { main: "#30c8ff" },
  },
})

const Selector = props => {
  const classes = useStyles()
  const { addItem, cartCount } = useShoppingCart()
  const [product, selectProduct] = useState("default")
  const [quantity, setQuantity] = useState(1)

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
    if (productEntries === "default") {
      return
    }

    const formattedProduct = addProductFormat(productEntries[e.target.value])

    selectProduct(formattedProduct)
    console.log(`current product:`)
    console.log(product)
  }

  const logChange = e => {
    e.preventDefault()
    console.log(e)
  }

  const productEntries = []
  for (const item in props.props) {
    productEntries.push(props.props[item])
  }

  const changeQuantity = dir => {
    if (dir === -1) {
      setQuantity(Math.max(1, quantity - 1))
    } else if (dir === 1) {
      setQuantity(Math.min(5, quantity + 1))
    }
  }
  return (
    <div>
      <FormControl variant="filled" className={classes.formControl}>
        <Select onChange={handleChange} defaultValue="">
          {productEntries.map((option, index) =>
            option.name.includes(props.productFilter) ? (
              <MenuItem key={index} value={index}>
                {option.name.substring(option.name.indexOf("-") + 2)}
              </MenuItem>
            ) : (
              ""
            )
          )}
        </Select>
        <FormHelperText>Select a size</FormHelperText>
      </FormControl>
      <div>
        <p>Set Quantity</p>
        <ThemeProvider className="set-qty" theme={theme}>
          <IconButton
            color="primary"
            variant="contained"
            onClick={() => changeQuantity(-1)}
          >
            <RemoveIcon />
          </IconButton>
          {quantity}
          <IconButton
            color="primary"
            variant="contained"
            onClick={() => changeQuantity(1)}
          >
            <AddIcon />
          </IconButton>
        </ThemeProvider>
      </div>
      <br />
      <ThemeProvider theme={theme}>
        <div style={{ display: "flex" }}>
          {product === "" ? (
            <Button
              classes={{ root: classes.root }}
              onClick={() => addItem(product, quantity)}
              disabled
            >
              Add to Cart
            </Button>
          ) : (
            <Button
              classes={{ root: classes.root }}
              onClick={() => addItem(product, quantity)}
            >
              Add to Cart
            </Button>
          )}
          <Cart propClass={{ root: classes.root }} />
        </div>
      </ThemeProvider>
    </div>
  )
}

export default Selector
