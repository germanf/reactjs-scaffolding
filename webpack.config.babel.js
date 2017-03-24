/* eslint no-console: ["error", { allow: ["log"] }] */
import path from 'path';
import webpack from 'webpack';
import OpenBrowserPlugin from 'open-browser-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';


const DEV_SERVER_URL = 'http://localhost:8080';
const DEVELOPMENT = process.env.NODE_ENV === 'development';
const PRODUCTION = process.env.NODE_ENV === 'production';

console.log('============================ WhitePrompt ============================');
console.log('Webpack is building for: ', PRODUCTION ? 'PRODUCTION' : 'DEVELOPMENT');

const entry = PRODUCTION
    ? {
      app: [
        './src/Bootstrap.jsx'
      ],
    }
    : {
      app: [
        './src/Bootstrap.jsx'
      ],
      vendor: ['react', 'redux'],
    };


const plugins = PRODUCTION
    ? [new webpack.optimize.UglifyJsPlugin()]
    : [
      //new OpenBrowserPlugin({ url: DEV_SERVER_URL }),
      new webpack.optimize.CommonsChunkPlugin({ name: 'vendor', filename: '[name].bundle-[hash].js' }),
    ];

plugins.push(
    new HtmlWebpackPlugin({ template: './index.html' }),
    new webpack.DefinePlugin({
      DEVELOPMENT: JSON.stringify(DEVELOPMENT),
      PRODUCTION: JSON.stringify(PRODUCTION),
    }),
    new ExtractTextPlugin({
      filename: 'bundle-[hash].css',
      disable: false,
      allChunks: true,
    }),
);

module.exports = {
  devtool: 'source-map', // to see the actual es6 code in chrome dev tools
  devServer: {
    historyApiFallback: true
  },
  entry,
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '',
    filename: 'bundle.[hash:12].min.js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader',
        }),
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader?modules', 'sass-loader'],
        }),
      },
      {
        test: /\.(eot|ttf|woff|woff2)$/,
        loader: 'file-loader?name=public/fonts/[name].[ext]',
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            query: {
              progressive: true,
              optimizationLevel: 7,
              interlaced: false,
              pngquant: {
                quality: '65-90',
                speed: 4,
              },
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.css', '.scss'],

    modules: [
      'node_modules',
    ],

    // Whenever someone does import 'react', resolve the one in the node_modules
    // at the top level, just in case a dependency also has react in its node_modules,
    // we don't want to be running to versions of react!!!
    alias: {
      react: path.join(__dirname, 'node_modules/react'),
    },
  },
  plugins,
};
