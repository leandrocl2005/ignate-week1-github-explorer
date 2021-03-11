## Setup

- > yarn init -y
- > yarn add react
- > yarn add react-dom

## Folder tree

- ./node_modules
- ./public/index.html
- ./src
    - index.jsx
    - App.jsx
    - ./styles/global.css
- package.json
- yarn.lock
- babel.config.js
- webpack.config.js

## Babel setup (convert react to js)

- > yarn add @babel/core @babel/cli @babel/preset-env -D
- > yarn add @babel/preset-react -D
- Config *babel.config.js*
- To create `bundle.js` with Babel:
- > yarn babel src/index.jsx --out-file dist/bundle.js

Ps: If there are file imports, we need webpack!


## Webpack setup (handle file imports)

- > yarn add webpack webpack-cli -D 
- > yarn add babel-loader -D
- > yarn add style-loader css-loader -D
- > yarn add sass -D
- > yarn add sass-loader -D
- > yarn add -D @pmmmwh/react-refresh-webpack-plugin react-refresh
- > yarn add html-webpack-plugin -D
- > yarn add webpack-dev-server -D
- Config *webpack.config.js*

## File contents

- Get the content of files *public/index.html*, *global.css*, *App.jsx* and *index.jsx*.

## Set enviroments variables

- > yarn add cross-env -D
- Create build script in *package.json*:
```json
"scripts": {
    ...,
    "build": "cross-env NODE_ENV=production webpack"
}
```

## How to run 

### Without webpack server

Create *bundle.js* with webpack

- > yarn webpack
And, now, open *dist/index.html* in webbrowser.

### With webpack server

- > yarn webpack serve
In browser go to http://localhost:8080/

### In production

- > yarn build

## Important concepts

- Components
- Props
- State (Imutability)

## Using Typescript

- > yarn add typescript -D
- > yarn tsc --init
Change *tsconfig.json*
- > yarn add @babel/preset-typescript -D

No arquivo *babel.config.js* adicione:
```js
    presets: [
        ...,
        '@babel/preset-typescript',
    ]
```
- > yarn add @types/react-dom -D

Rename *jsx* to *tsx*.
