const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  entry: {
    ddae: './src/index.js'
  },
  module: {
    rules: [
      {
        test: /.js$/,
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
      filename: 'ddae.css'
    })
  ],
  devtool: 'source-map',
  mode: 'development',
  target: process.env.NODE_ENV !== 'production' ? 'web' : 'browserslist',
  devServer: {
    contentBase: './dist/'
  }
}
