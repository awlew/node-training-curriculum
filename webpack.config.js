/* eslint-disable no-var */

var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  plugins : [
    new HtmlWebpackPlugin({
      filename : 'index.html',
      template : 'client/init/index.html',
      inject : 'head',
    }),

    new webpack.DefinePlugin({
      'process.env.ENVIRONMENT' : JSON.stringify(process.env.ENVIRONMENT),
    }),
  ],
  entry : [ './client/init/main' ],
  target : 'web',
  output : {
    path : path.join(__dirname, 'dist'),
    filename : 'js/[name]-[hash].js',
    chunkFilename : 'js/[id].chunk.js',
    sourceMapFilename : 'js/[name]-[hash].map',
    devtoolModuleFilenameTemplate : 'file://[absolute-resource-path]',
    devtoolFallbackModuleFilenameTemplate : 'file://[absolute-resource-path]?[hash]',
  },
  resolve : {
    root : __dirname,
    modulesDirectories : [ 'node_modules' ],
    extensions : [ '', '.js', '.jsx' ],
  },
  resolveLoader : {
    modulesDirectories : [ './node_modules' ],
  },
  module : {
    noParse : /\.min\.js/,
    loaders : [
      {
        test : /\.jsx|js$/,
        exclude : /node_modules/,
        loaders : [ 'react-hot', 'babel?stage=0' ],
      },
      {
        test : /\.json$/,
        loader : 'json',
      },
      {
        test : /\.css$/,
        loader : 'style-loader!css-loader',
      },
      {
        test : /\.scss$/,
        loader : 'style-loader!css-loader!sass-loader',
      },
      {
        test : /\.png$/,
        loader : 'url?limit=8192&mimetype=image/png&name=images/[hash].[ext]',
      },
      {
        test : /\.jpg$/,
        loader : 'file?limit=8192&mimetype=image/jpg&name=images/[hash].[ext]',
      },
      {
        test : /\.gif$/,
        loader : 'file?limit=8192&mimetype=image/gif&name=images/[hash].[ext]',
      },
      {
        test : /\.woff(\?v=\d+\.\d+\.\d+)?$/,
        loader : 'url?limit=8192&mimetype=application/font-woff&name=assets/[hash].[ext]',
      },
      {
        test : /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
        loader : 'url?limit=8192&mimetype=application/font-woff&name=assets/[hash].[ext]',
      },
      {
        test : /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader : 'url?limit=8192&mimetype=application/octet-stream&name=assets/[hash].[ext]',
      },
      {
        test : /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader : 'file?limit=8192&mimetype=application/vnd.ms-fontobject&name=assets/[hash].ext]',
      },
      {
        test : /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader : 'url?limit=8192&mimetype=image/svg+xml&name=images/[hash].[ext]',
      },
    ],
  },
  node : {
    // don't try to load these modules
    net : 'empty',
    tls : 'empty',
    dns : 'empty',
  },
};
