import React, { useState } from 'react'

import QuantityStepper from './QuantityStepper'

const CartItem = ({ id, name, sku, quantity, meta, removeFromCart }) => {
  const {
    display_price: {
      without_tax: {
        unit: { formatted: unit },
        value: { formatted: value },
      },
    },
  } = meta
  const [removing, setRemoving] = useState(false)

  const removeItem = async () => {
    await setRemoving(true)
    await removeFromCart(id)
  }

  return (
    <div>
      <h3>
        {name} &mdash; {sku}
      </h3>

      <QuantityStepper itemId={id} quantity={quantity} />

      <p>
        Unit price: {unit} x {quantity}: {value}
      </p>

      <button onClick={removeItem} disabled={removing}>
        &times;
      </button>
    </div>
  )
}

export default CartItem
