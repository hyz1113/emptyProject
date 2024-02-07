const { resolve }  = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/main.js',
  output: {
    path: './dist',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        //要使用多个loader时使用use数组
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      //匹配并处理图片
      {
        test: /\.(jpg|png|gif)$/,
        //需要下载url-loader 和 file-loader
        loader: 'url-loader',
        options: {
          limit: 8 * 1024,
          name: '[hash:10].[ext]'
        }
      },
      {
        test: /\.html$/,
        //该loader专门处理html中的img图片
        loader: 'html-loader'
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
          template: './src/index.html'
        }
    )
  ],
  mode: 'development'
}
