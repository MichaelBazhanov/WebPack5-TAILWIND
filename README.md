# Webpack template POSTCSS v.1

Basic configuration of Webpack.

## Technologies

		"name": "webpack5-postcss",
		"version": "1.0.0",
		"description": "start template",
		"main": "index.js",
		"scripts": {
			"start": "set NODE_ENV=development&&webpack serve",
			"dev": "set NODE_ENV=development&&webpack",
			"build": "set NODE_ENV=production&&webpack"
		},


## Start using for a new project

Clone the repo
Run npm i to install dependencies
Run commands in terminal:

Development Server

```
npm start
```

Production Build

```
npm run build
```

Development mode

```
npm run dev
```

```
1. npm i -D babel-loader @babel/core @babel/preset-env webpack webpack-cli webpack-dev-server
2. npm i -D style-loader css-loader postcss-loader postcss postcss-preset-env mini-css-extract-plugin
3. npm i jquery
4. npm install --save-dev favicons favicons-webpack-plugin
5. npm i -D cssnano css-minimizer-webpack-plugin postcss-easy-import postcss-loader postcss-nested postcss-scss
6. npm install -D tailwindcss autoprefixer
```