import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class Cart extends Component {
  render () {
    const {cart} = this.props
    let cropsItem

    if (cart) {
      cropsItem = cart.map(item => (
        <div>
          <h4>Crop Name: <b>{item.name}</b></h4>
          <p>Quantity: {item.quantity}</p>
          <p>Price: ₱{Math.floor(Math.random() * 10 * item.quantity).toFixed(2)}</p>
        </div>
      ))
    } else {
      cropsItem = <p>Add a Crop to Cart</p>
    }

    return (
      <div>
        <h3>Cart Items</h3>
        {cropsItem}
        <Link to="/tracking-purchase">Continue to Checkout</Link>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  cart: state.cart,
})

export default connect(mapStateToProps)(Cart)

