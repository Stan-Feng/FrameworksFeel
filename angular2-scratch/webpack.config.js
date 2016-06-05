const webpack = require('webpack');
const path = require('path');

function root (args) {
  args = Array.prototype.slice.call(arguments, 0);

  return path.join.apply(path, [__dirname].concat(args));
}

module.exports = {
  devTool: 'source-map',
  debug: true,
  entry: './client/boot.ts',

  resolve: {
    extensions: ['', '.ts', '.js', '.html']
  },

  output: {
    path: './build',
    filename: 'bundle.js'
  },

  module: {
    preLoaders: [
      { test: /\.js$/, loader: 'source-map-loader', exclude: [ root('node_modules/rxjs') ] }
    ],

    loaders: [
      { test: /\.js$/, loader: 'babel-loader?presets[]=es2015', exclude: /node_modules/ },
      { test: /\.ts$/, loader: 'awesome-typescript-loader', exclude: [/\.(spec|e2e).ts/] },
      { test: /\.(html|css)$/, loader: 'raw-loader' }
    ]
  },

  devServer: {
    historyApiFallback: true
  },

  plugins: [

  ]
};
