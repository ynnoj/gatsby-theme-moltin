import React from 'react'
import Img from 'gatsby-image'

const ProductImage = ({ src, ...props }) => {
  if (!src) return null

  return <Img fixed={src.childImageSharp.fixed} {...props} />
}

export default ProductImage
