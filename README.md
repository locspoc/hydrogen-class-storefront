# JavaScript Example

Hydrogen is a React framework and SDK that you can use to build fast and dynamic Shopify custom storefronts.

[Check out the docs](https://shopify.dev/custom-storefronts/hydrogen)

[Run this template in JavaScript on StackBlitz](https://stackblitz.com/github/Shopify/hydrogen/tree/dist/templates/hello-world-js?file=package.json)

[Run this template in TypeScript on StackBlitz](https://stackblitz.com/github/Shopify/hydrogen/tree/dist/templates/hello-world-js?file=package.json)

## Getting started

**Requirements:**

-   Node.js version 16.14.0 or higher
-   Yarn

```bash
npm init @shopify/hydrogen@latest --template hello-world-ts
```

Remember to update `hydrogen.config.js` with your shop's domain and Storefront API token!

## Building for production

```bash
yarn build
```

## Previewing a production build

To run a local preview of your Hydrogen app in an environment similar to Oxygen, build your Hydrogen app and then run `yarn preview`:

```bash
yarn build
yarn preview
```

## Caching Issue

```
yarn dev --force

```

## Hydrogen on Netlify

```

https://docs.netlify.com/integrations/frameworks/hydrogen/

https://github.com/netlify/hydrogen-platform#installation

npm i -D @netlify/hydrogen-platform

shopify hydrogen build

```

## Tailwind CSS

```

https://shopify.dev/custom-storefronts/hydrogen/getting-started/tutorial/begin

npm install -D tailwindcss @tailwindcss/typography postcss autoprefixer
npx tailwindcss init -p

```

## Hero Icons

```
https://heroicons.com/
```

## GraphIQL

```
http://localhost:3000/graphiql
```
