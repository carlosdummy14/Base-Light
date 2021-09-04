const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

/** @type {import('webpack').Configuration} */
module.exports = {
  output: {
    filename:'bundle.js',
    path:path.resolve(__dirname,'build'),
    clean:true
  },
  plugins:[
    new HtmlWebpackPlugin({
      template:path.resolve(__dirname,'public/index.html')
    }),
    new MiniCssExtractPlugin({
      filename:'style.css'
    })
  ],
  module:{
    rules:[
      {
        test:/\.js$/,
        loader:'babel-loader'
      },
      {
        test: /\.scss$/,
        use:[
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
          'postcss-loader'
        ]
      },
      {
        test:/\.html$/,
        use:'html-loader'
      }
    ]
  }
}