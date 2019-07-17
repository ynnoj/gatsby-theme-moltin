import React, { createContext, useReducer, useEffect } from 'react'
import { MoltinClient, createCartIdentifier } from '@moltin/request'

import MoltinLocalStorageAdapter from '../utils/MoltinLocalStorageAdapter'
import useLocalStorage from '../hooks/useLocalStorage'

const SET_CART = 'SET_CART'
const RESET_CART = 'RESET_CART'

let CartContext

const { Provider, Consumer } = (CartContext = createContext())

const initialState = {
  count: 0,
  items: [],
  cartItems: [],
  promotionItems: [],
  taxItems: [],
  meta: null,
}

const reducer = (state, action) => {
  switch (action.type) {
    case SET_CART:
      const { data: items, meta } = action.payload

      const cartItems = items.filter(({ type }) => type === 'cart_item')
      const promotionItems = items.filter(
        ({ type }) => type === 'promotion_item'
      )
      const taxItems = items.filter(({ type }) => type === 'tax_item')
      const count = cartItems.reduce(
        (sum, { type, quantity }) => type === 'cart_item' && sum + quantity,
        0
      )

      const subTotal = meta ? meta.display_price.without_tax.formatted : 0

      return {
        ...state,
        items,
        cartItems,
        promotionItems,
        taxItems,
        count,
        meta,
        subTotal,
      }

    case RESET_CART:
      return initialState

    default:
      return state
  }
}

const CartProvider = ({ clientId, children, ...props }) => {
  const moltin = new MoltinClient({
    client_id: clientId,
    application: 'gatsby-theme-moltin',
    storage: new MoltinLocalStorageAdapter(),
  })

  const initialCartId = createCartIdentifier()

  const [state, dispatch] = useReducer(reducer, initialState)
  const [cartId, setCartId] = useLocalStorage('mcart', initialCartId)
  const isEmpty = state.count === 0

  useEffect(() => {
    getCart(cartId)
    setCartId(cartId)
  }, [cartId])

  const getCart = async id => {
    const payload = await moltin.get(`carts/${id}/items`)

    dispatch({ type: SET_CART, payload })
  }

  const addToCart = async (id, quantity) => {
    const payload = await moltin.post(`carts/${cartId}/items`, {
      type: 'cart_item',
      id,
      quantity,
    })

    dispatch({ type: SET_CART, payload })
  }

  const updateQuantity = async (id, quantity) => {
    const payload = await moltin.put(`carts/${cartId}/items/${id}`, {
      type: 'cart_item',
      id,
      quantity,
    })

    dispatch({ type: SET_CART, payload })
  }

  const removeFromCart = async id => {
    const payload = await moltin.delete(`carts/${cartId}/items/${id}`)

    dispatch({ type: SET_CART, payload })
  }

  const addPromotion = async code => {
    const payload = await moltin.post(`carts/${cartId}/items`, {
      type: 'promotion_item',
      code,
    })

    dispatch({ type: SET_CART, payload })
  }

  return (
    <Provider
      value={{
        ...state,
        ...props,
        cartId,
        isEmpty,
        addToCart,
        updateQuantity,
        removeFromCart,
        addPromotion,
        removePromotion: removeFromCart,
      }}
    >
      {children}
    </Provider>
  )
}

export { CartProvider, Consumer as CartConsumer, CartContext as default }
