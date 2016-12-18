var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'assets/js/public');
var APP_DIR = path.resolve(__dirname, 'assets/js');

var config = {
  entry: APP_DIR + '/index.js',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  module : {
    loaders : [
      {test : /\.jsx?/, include : APP_DIR, loader : 'babel', query: {presets: ['react']}},
      {test: /\.css$/, loader: 'style!css'},
    ]
  }
};

module.exports = config;