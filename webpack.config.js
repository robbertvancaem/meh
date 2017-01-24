var webpack = require('webpack')

module.exports = {
  entry: './index.js',

  output: {
    path: 'public',
    filename: 'bundle.js',
    publicPath: '/'
  },

  plugins: process.env.NODE_ENV === 'production' ? [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.DefinePlugin({
      'process.env': { NODE_ENV: JSON.stringify('production') }
    }),
  ] : [],

  module: {
    loaders: [
      {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader?presets[]=es2015&presets[]=react'
      },
      {
          test: /\.css$/,
          loader: "style!css"
      },
      {
          test: /\.scss$/,
          loaders: ["style-loader", "css-loader", "sass-loader"]
      },
      {
          test: /.*\.(gif|png|jpe?g|svg)$/i,
          loaders: [
              'file?hash=sha512&digest=hex&name=[hash].[ext]',
              'image-webpack'
          ]
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      }
    ]
  }
}
