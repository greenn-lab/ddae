const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    tae: './src/index.ts'
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  module: {
    rules: [
      {
        test: /.ts$/,
        use: ['babel-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.scss$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', {
          loader: 'sass-loader',
          options: {
            implementation: require('sass')
          }
        }],
        exclude: /node_modules/,

      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'tae.css'
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ],
  devtool: 'source-map',
  mode: 'development',
  target: process.env.NODE_ENV !== 'production' ? 'web' : 'browserslist',
  devServer: {
    contentBase: './dist/'
  }
}
