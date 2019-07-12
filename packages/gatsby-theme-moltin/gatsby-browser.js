import React from 'react'

import LayoutProvider from './src/components/LayoutProvider'

export const wrapRootElement = ({ element }) => (
  <LayoutProvider>{element}</LayoutProvider>
)
