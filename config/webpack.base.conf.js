let path = require('path');
let {dist, src} = {dist: path.resolve(__dirname, '../dist'), src: path.resolve(__dirname, '../src')};
let CleanWebpackPlugin = require('clean-webpack-plugin');
let SpriteLoaderPlugin = require('svg-sprite-loader/plugin');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let ProgressBar= require('progress-bar-webpack-plugin');
let webpack = require('webpack');


module.exports = {
  entry: {
    index: `${src}/js/page/index.js`
  },
  output: {
    path: dist,
    filename: 'js/[name].js'
  },

  stats: {
    colors: true,
    modules: true,
    reasons: true,
    errorDetails: true
  },

  plugins: [
    new CleanWebpackPlugin(dist),
    new SpriteLoaderPlugin({
      plainSprite: true
    }),
    new ProgressBar(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.ProvidePlugin({
      // $:'jquery',
      // jQuery: 'jquery',
      // "window.jQuery": "jquery"
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: `${src}/pug/page/index.pug`
    })
  ],

  module: {
    rules: [
      {
        test: /\.pug$/,
        use: [
          {
            loader: 'pug-loader',
            options: {
              pretty: true
            }
          }
        ],
      },
      // pug

      {
        test: /\.(eot|ttf|woff|woff2)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'fonts/[name].[ext]',
              publicPath: '../',
            }
          }
        ]
      },
      // fonts

      {
        test: /\.svg$/,
        use: [
          { 
            loader: 'svg-sprite-loader', 
            options: {
              extract: true,
              spriteFilename: 'img/sprite.svg'
            } 
          }
        ]
      },
      // svg

      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /(node_modules|bower_components)/,
        options: {
          presets: ['babel-preset-env']
        }
      },
      // js

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
    ]
  }

}