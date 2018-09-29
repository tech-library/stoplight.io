[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

## Project Structure

- `static.config.js`: react-static config file
- `tailwind.config.js`: tailwind config file
- `dist`: Production build folder
- `tmp`: Dev build folder
- `public`: Static files that will be copied into dist
- `old`: Old static HTML files that need to be converted to React
- `src/components`: React components
- `src/containers`: React pages
- `src/styles`: SASS/CSS files
- `src/utils`: Utility functions
- `src/App.js`: Website layout
- `src/index.js`: Entry point for React

## Scripts

```bash
# install dependencies
yarn install

# serve with hot reload at localhost:3000
yarn start

# build for staging
yarn stage

# build for production
yarn build

# serve production build
yarn serve

# format using prettier
yarn format
```

## Installation

1. Run `yarn install`
2. Run `yarn start`
3. Go to http://localhost:3000/

## How to add a route

1. Go to [static.config.js](./static.config.js)
2. Add a route to the `getRoutes` function

[More Info](https://react-static.js.org/docs/config#getroutes)

## How to add meta tags

1. Go to [static.config.js](./static.config.js)
2. Add meta tags to the `Document` function

[More Info](https://react-static.js.org/docs/config#document)

## Helpful links

- [React Static](https://react-static.js.org/docs/) - build system
- [Tailwind](https://tailwindcss.com/docs/what-is-tailwind) - CSS framework
