let baseConf = require('./webpack.base.conf');
let postCssPlugins = require('./postcss.js');
let merge = require('webpack-merge');
let ExtractTextPlugin = require('extract-text-webpack-plugin');
let webpack = require('webpack');

module.exports = merge({
  module: {
    rules: [
      {
        test: /\.sss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          publicPath: '../',
          use: [
            { 
              loader: 'css-loader',
              options: {
                minimize: true
              }
            },
            {
              loader: 'postcss-loader',
              options: {
                parser: 'sugarss',
                plugins: postCssPlugins
              }
            }
          ]
        })
       },
      //  css

      {
        test: /\.(png|jpg|gif|jpeg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'img/',
            }  
          },
          {
            loader: 'image-webpack-loader',
            options: {
              enforce: 'pre'
            }
          }
        ]
       },
      //  img

      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          extractCSS: true,
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

    ]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: 'css/[name].css'
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      }
    })
  ]
}, baseConf);