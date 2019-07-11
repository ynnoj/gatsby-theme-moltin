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
    },
  },
]
```

### Options

You can configure the theme using the following options:

| Option            | Default       | Required | Description                                        |
| ----------------- | ------------- | -------- | -------------------------------------------------- |
| `clientId`        | `null`        | _Yes_    | Your Moltin Client ID                              |
| `basePath`        | `/`           | No       | Useful if you wish to mount your store at `/store` |
| `productsPath`    | `products`    | No       | Change the path to products                        |
| `collectionsPath` | `collections` | No       | Change the path to collections                     |
| `categoriesPath`  | `categories`  | No       | Change the path to categories                      |
| `brandsPath`      | `brands`      | No       | Change the path to brands                          |
