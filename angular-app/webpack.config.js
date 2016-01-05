module.exports = {
  output: {
    filename: 'bundle.js'
  },

  devtool: 'sourcemap',

  module: {
    loaders: [
      { test: /\.html$/, loader: 'raw' },
      { test: /\.css$/, loader: 'css!style' },
      //TODO: create loader for .js file transpile ES6 to ES5
      { test: /\.js$/, loader: 'babel?stage=1', exclude: /node_moodules/ }
    ]
  },

  stylus: {
    use: [require('jeet')(), require('rupture')()]
  }
};