var CopyWebpackPlugin = require('copy-webpack-plugin')
var path = require('path')

var config = {
  entry: './src/main.js',

  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'index.js',
  },

  devServer: {
    inline: true,
    host: 'localhost',
    port: 4000
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',

        query: {
          presets: ['es2015', 'react']
        }
      }
    ],
  },

  plugins: [
    new CopyWebpackPlugin([
      { from: path.join(__dirname, 'index.html'), to: path.join(__dirname, 'dist') },
    ]),
  ],
}

module.exports = config;