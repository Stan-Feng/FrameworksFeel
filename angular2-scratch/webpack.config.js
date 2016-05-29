module.exports = {
  devTool: 'source-maps',
  debug: true,
  entry: './app/root.ts',
  resolve: {
    extensions: ['', 'ts', 'js']
  },

  output: {
    path: './build',
    filename: 'bundle.js'
  },

  module: {
    loaders: [
      { test: /\.ts$/, loader: 'awesome-typescript', exclude: [/\.(spec|e2e).ts/] }
    ]
  },

  devServer: {
    historyApiFallback: true
  },

  plugins: [

  ]
};
