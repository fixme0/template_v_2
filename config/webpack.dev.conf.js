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
      // css

      {
        test: /\.(png|jpg|gif|jpeg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'img/',
            }  
          }
        ]
       },
      //  img

      {
          test: /\.vue$/,
          loader: 'vue-loader',
          options: {
            postcss: {
              plugins: postCssPlugins
            },
            loaders: {
              js: {
                 loader: 'babel-loader',
                 options: {
                     presets: ['babel-preset-env']
                 }
              }
            }
          }
      }
      // vue
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
  devtool: 'eval-source-map'
}, baseConfig);