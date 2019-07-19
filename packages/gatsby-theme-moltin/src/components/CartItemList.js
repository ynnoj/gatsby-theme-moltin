import React, { useContext } from 'react'

import CartContext from '../context/CartContext'
import CartItem from './CartItem'

const CartItemList = () => {
  const { isEmpty, cartItems, removeFromCart, subTotal } = useContext(
    CartContext
  )

  if (isEmpty) return <p>The cart is empty</p>

  return (
    <React.Fragment>
      {cartItems.map(item => (
        <CartItem key={item.id} {...item} removeFromCart={removeFromCart} />
      ))}

      <p>Sub total: {subTotal}</p>
    </React.Fragment>
  )
}

export default CartItemList
