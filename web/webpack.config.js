const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackTagsPlugin = require('html-webpack-tags-plugin');
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

const config = {
  entry: [
    'react-hot-loader/patch',
    './src/index.jsx'
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1
            }
          },
          'postcss-loader'
        ],
        exclude: /\.module\.css$/
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: true
            }
          },
          'postcss-loader'
        ],
        include: /\.module\.css$/
      },
      {
        test: /\.png$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              mimetype: 'image/png'
            }
          }
        ]
      },
      {
        test: /\.svg$/,
        use: 'file-loader'
      }
    ]
  },
  resolve: {
    extensions: [
      '.js',
      '.jsx'
    ],
    alias: {
      'react-dom': '@hot-loader/react-dom'
    }
  },
  devServer: {
    contentBase: './dist'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: require('html-webpack-template'),
      inject: true,
      appMountId: 'app',
      filename: 'index.html',
      title: 'AC: New Friends'
    }),
    new LodashModuleReplacementPlugin,
    new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /en/),
    new FaviconsWebpackPlugin({
      favicons: {
        appName: 'AC: New Friends',
        appDescription: 'Animal Crossing: New Friends',
        developerName: 'kos33rd',
        background: '#F6F7EB',
        theme_color: '#F6F7EB'
      }
    }),
    new HtmlWebpackTagsPlugin({
      links: [
        {
          path: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap',
          attributes: { rel: 'stylesheet' }
        },
        {
          path: 'https://fonts.googleapis.com/icon?family=Material+Icons',
          attributes: { rel: 'stylesheet' }
        }
      ]
    }),
  ]
};

module.exports = config;
