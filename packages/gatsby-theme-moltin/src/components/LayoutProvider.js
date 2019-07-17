import React, { useReducer } from 'react'

import { LayoutContext } from '../context/LayoutContext'

function reducer(state, { type }) {
  switch (type) {
    case 'SET_LIST':
      return {
        layout: 'list',
      }
    case 'SET_GRID':
      return {
        layout: 'grid',
      }
    default:
      return {
        ...state,
      }
  }
}

const LayoutProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    layout: 'grid',
  })

  function toggleLayout() {
    dispatch({ type: state.layout === 'grid' ? 'SET_LIST' : 'SET_GRID' })
  }

  return (
    <LayoutContext.Provider value={{ ...state, toggleLayout }}>
      {children}
    </LayoutContext.Provider>
  )
}

export default LayoutProvider
