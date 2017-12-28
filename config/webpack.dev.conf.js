let postCssPlugins = require('./postcss.js');
let merge = require('webpack-merge');
let baseConfig = require('./webpack.base.conf');
let webpack = require('webpack');

module.exports = merge({
  module: {
    rules: [
      {
        test: /\.sss$/,
        use: [
          'style-loader',
          { 
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              parser: 'sugarss',
              plugins: postCssPlugins,
              sourceMap: true
            }
          }
        ]
      },
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      NODE_ENV: JSON.stringify('dev')
    })
  ],
  devServer: {
    historyApiFallback: true,
    overlay: true,
    port: 8001,
    compress: true,
    inline: true,
    // hot: true
  },
  devtool: 'source-map'
}, baseConfig);