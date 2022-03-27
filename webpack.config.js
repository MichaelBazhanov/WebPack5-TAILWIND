const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')

let mode = 'development'
if (process.env.NODE_ENV === 'production') {
  mode = 'production'
}
console.log(mode + ' mode')

module.exports = {
  mode: mode,
  entry: {
    scripts: './src/index.js',
    user: './src/user.js',
  },
  output: {
    filename: '[name].[contenthash].js',
    assetModuleFilename: 'assets/[hash][ext][query]',
    clean: true,
  },
  devServer: {
    open: true,
    static: {
      directory: './src',
      watch: true,
    },
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
    minimizer: [
      new CssMinimizerPlugin(),
    ],
  },
  plugins: [
    // new FaviconsWebpackPlugin('./src/asset/images/Svelte.jpg'), // svg works too!
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html',
      minify: true,
    }),
    new HtmlWebpackPlugin({
      filename: 'one.html',
      template: './src/one.html',
      minify: true,
    }),
  ],
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: 'html-loader',
      },
      {
        test: /\.(p|post|)css$/,
        use: [
          mode === 'development' ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
  devtool: 'eval-cheap-module-source-map',
}
