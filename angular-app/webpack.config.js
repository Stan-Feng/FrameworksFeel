module.exports = {
  output: {
    filename: 'bundle.js'
  },

  devtool: 'sourcemap',

  module: {
    loaders: [
      { test: /\.html$/, loader: 'raw'},
      { test: /\.styl$/, loader: 'style!css!stylus', exclude: /node_modules/ },
      { test: /\.css$/, loader: 'css!style', exclude: /node_modules/ },
      { test: /\.js$/, loader: 'babel?stage=1', exclude: [/node_modules/, /clinet\/lib/, /\.spec\.js/] }
    ]
  },

  stylus: {
    use: [require('jeet')(), require('rupture')()]
  }
};
