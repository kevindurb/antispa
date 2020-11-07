'use strict';
const webpack = require('webpack');
const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/web.ts',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'public'),
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development'),
      'process.env.NODE_DEBUG': JSON.stringify('*'),
    }),
  ],
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'ts-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
};
