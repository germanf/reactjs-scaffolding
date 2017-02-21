/* eslint no-console: ["error", { allow: ["log"] }] */
import path from 'path';
import webpack from 'webpack';
import OpenBrowserPlugin from 'open-browser-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const DEV_SERVER_URL = 'http://localhost:8080';
const DEVELOPMENT = process.env.NODE_ENV === 'development';
const PRODUCTION = process.env.NODE_ENV === 'production';

console.log('============================ WhitePrompt ============================');
console.log('Webpack is building for: ', PRODUCTION ? 'PRODUCTION' : 'DEVELOPMENT');

const entry = PRODUCTION
    ? './src/App.jsx'
    : { app: [
      './src/App.jsx',
    ] };


const plugins = PRODUCTION
    ? [
      new webpack.optimize.UglifyJsPlugin(),
      new HtmlWebpackPlugin({ template: './index.html' }),
    ]
    : [
      new OpenBrowserPlugin({ url: DEV_SERVER_URL }),
      new HtmlWebpackPlugin({ template: './index.html' }),
    ];

// Injecting global variables into source code
plugins.push(
    new webpack.DefinePlugin({
      DEVELOPMENT: JSON.stringify(DEVELOPMENT),
      PRODUCTION: JSON.stringify(PRODUCTION),
    }),
);

module.exports = {
  devtool: 'source-map', // to see the actual es6 code in chrome dev tools
  entry,
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '',
    filename: 'bundle.[hash:12].min.js',
  },
  module: {
    loaders: [{
      test: /\.jsx?$/, // every js file will be transpiled
      loaders: ['babel-loader'],
      exclude: '/node_modules/',
    }, {
      test: /\.scss$/,
      loaders: ['style', 'css', 'sass'],
      exclude: '/node_modules/',
    }, {
      test: /\.(png|jpg|gif)$/, // every png, jpg, gif
      loaders: ['url-loader?limit=10000&name=images/[hash:12].[ext]'], // https://github.com/webpack-contrib/url-loader this will short img file name and convert a 10KB files into base64 img tag
      exclude: '/node_modules/',
    }],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins,
};
