# gatsby-theme-moltin

🛍 Gatsby theme for building [Moltin](https://moltin.com) powered eCommerce websites.

## Install

```sh
yarn add @moltin/gatsby-theme-moltin
```

## How to use

```js
// In your gatsby-config.js
plugins: [
  {
    resolve: `@moltin/gatsby-theme-moltin`,
    options: {
      clientId: '...',
      // See additional options below
    },
  },
]
```

### Options

| Option            | Default       | Required | Description                                        |
| ----------------- | ------------- | -------- | -------------------------------------------------- |
| `clientId`        | `null`        | **Yes**  | Your Moltin Client ID                              |
| `basePath`        | `/`           | No       | Useful if you wish to mount your store at `/store` |
| `productsPath`    | `products`    | No       | Change the path to products                        |
| `collectionsPath` | `collections` | No       | Change the path to collections                     |
| `categoriesPath`  | `categories`  | No       | Change the path to categories                      |
| `brandsPath`      | `brands`      | No       | Change the path to brands                          |

### Component shadowing

You can use Gatsby component shadowing to change the behaviour/appearance of components.

If you wanted to change the default `/categories` page, you could create the following file inside your Gatsby project.

```js
// src/@moltin/gatsby-theme-moltin/components/CategorySection

import React from 'react'
import { Link } from 'gatsby'

import { ProductGrid } from '@moltin/gatsby-theme-moltin'

const CatalogSection = ({ id, path, name, description, products }) => {
  return (
    <section key={id}>
      <h2>
        <Link to={path}>{name}</Link>
      </h2>
      <p>{description}</p>

      <ProductGrid products={products} />
    </section>
  )
}

export default CatalogSection
```
