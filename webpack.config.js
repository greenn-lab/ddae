const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  entry: {
    tae: './src/index.ts'
  },
  module: {
    rules: [
      {
        test: /.[jt]s$/,
        use: ['babel-loader']
      },
      {
        test: /\.s[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({filename: 'dist/css/tae-default.css'})
  ],
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    hot: true
  }
}
