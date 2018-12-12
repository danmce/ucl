const HtmlWebPackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
  resolve: {
    alias: {
      Components: path.resolve(__dirname, 'src/Components/'),
      Styles: path.resolve(__dirname, 'src/Styles/')
    },
    extensions: ['.js']
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: { minimize: true }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: './index.html'
    })
  ]
}
