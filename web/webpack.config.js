const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackTagsPlugin = require('html-webpack-tags-plugin')
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin')
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')

const config = {
  entry: ['react-hot-loader/patch', './src/index.jsx'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
            },
          },
          'postcss-loader',
        ],
        exclude: /\.module\.css$/,
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: true,
            },
          },
          'postcss-loader',
        ],
        include: /\.module\.css$/,
      },
      {
        test: /\.png$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              mimetype: 'image/png',
              limit: 8192,
            },
          },
        ],
      },
      {
        test: /\.svg$/,
        use: 'file-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      'react-dom': '@hot-loader/react-dom',
      '~': path.resolve(__dirname, 'src'),
    },
  },
  devServer: {
    contentBase: './dist',
    historyApiFallback: true,
  },
  devtool: 'eval-source-map',
  plugins: [
    new HtmlWebpackPlugin({
      template: require('html-webpack-template'),
      inject: true,
      appMountId: 'app',
      filename: 'index.html',
      title: 'AC: New Friends',
    }),
    new LodashModuleReplacementPlugin(),
    new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /en/),
    new FaviconsWebpackPlugin({
      favicons: {
        appName: 'AC: New Friends',
        appDescription: 'Animal Crossing: New Friends',
        developerName: 'kos33rd',
        background: '#F6F7EB',
        theme_color: '#F6F7EB',
      },
    }),
    new HtmlWebpackTagsPlugin({
      links: [
        {
          path:
            'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap',
          attributes: { rel: 'stylesheet' },
        },
        {
          path:
            'https://fonts.googleapis.com/css2?family=Lato:wght@700&display=swap',
          attributes: { rel: 'stylesheet' },
        },
        {
          path: 'https://fonts.googleapis.com/icon?family=Material+Icons',
          attributes: { rel: 'stylesheet' },
        },
      ],
    }),
    new webpack.DefinePlugin({
      PRODUCTION: JSON.stringify(process.env.PRODUCTION || ''),
      BACKEND_URL: JSON.stringify(
        process.env.BACKEND_URL || '//localhost:8000/api/'
      ),
      GOOGLE_CLIENT_ID: JSON.stringify(
        process.env.GOOGLE_CLIENT_ID ||
          '810585960469-6t1dll32bf956ib0ia1q34kvncrr0m98.apps.googleusercontent.com'
      ),
      API_CLIENT_ID: JSON.stringify(
        process.env.API_CLIENT_ID || 'AeHpsZrOk4pJxSzRCx6OV6k9HSU4M9q2QfM4EqAs'
      ),
      API_CLIENT_SECRET: JSON.stringify(
        process.env.API_CLIENT_SECRET ||
          '5M7qczd8UvuQA58rerF5rwAFrrezGyiNG4NwEDj7pxXjJX0fZwPIq7xS1OSyOaGqhrvnoVloyOW7FkcVdqwnB6F3aQXfgZ9yGZ82NIzKLjRrlit9ed3wgwL3UOjKBLGd'
      ),
      GOOGLE_ANALYTICS_ID: JSON.stringify(
        process.env.GOOGLE_ANALYTICS_ID || 'UA-18174506-2'
      ),
    }),
  ],
}
module.exports = config
