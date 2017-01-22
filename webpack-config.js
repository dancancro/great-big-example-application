'use strict';

const path = require('path');
const proxy = require('./server/webpack-dev-proxy');
const loaders = require('./webpack/loaders');
const plugins = require('./webpack/plugins');
const postcssInit = require('./webpack/postcss');

/*
 * Dev Config
 * ==========
 *
 * For dev, create an app entry point and a polyfills entry point
 * (need to because it lives in a file that is never imported by the app -
 * we bring it in later via CommonsChunkPlugin).
 *
 * Also, save compilation time by not adding [chunkhash]es to the filenames
 */
const devConfig = {
  entry: {
    app: './src/index.ts',
    polyfills: './src/polyfills.ts',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    publicPath: '/',
    sourceMapFilename: '[name].js.map',
    chunkFilename: '[id].chunk.js',
  },
  devtool: 'inline-source-map',
};

/*
 * Prod Config
 * ===========
 *
 * For prod, create an app entry point and a polyfills entry point
 * (need to because it lives in a file that is never imported by the app - we
 * bring it in later via CommonsChunkPlugin) as well as a vendor bundle.
 *
 * The idea is that eventually, once chunk-manifest-webpack-plugin is
 * working with wp2, each chunk suffixed with its chunkhash can be
 * cached on a user's browser, ideally requiring them to only redownload
 * the vendor bundle if the vendor libraries change. Otherwise, the
 * smallest bundle, app.ts, would be the only thing they'd have to get a
 * new version of, since it's the most likely to change.
 *
 * https://medium.com/@okonetchnikov/long-term-caching-of-static-assets
 * -with-webpack-1ecb139adb95
 */
const prodConfig = {
  entry: {
    app: './src/index.ts',
    // keep polyfills
    polyfills: './src/polyfills.ts',
    // and vendor files separate
    vendor: [
      '@angular/core',
      '@angular/common',
      '@angular/forms',
      '@angular/http',
      '@angular/platform-browser',
      '@angular/platform-browser-dynamic',
      '@angular/router',
      'rxjs',
      'ng2-redux',
      'ng2-redux-router',
      'redux',
      'immutable',
      'redux-localstorage',
      'redux-observable',
      'redux-logger',
      'typed-immutable-record',
    ],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[chunkhash].js',
    publicPath: '/',
    sourceMapFilename: '[name].[chunkhash].js.map',
    chunkFilename: '[id].chunk.js',
  },
  devtool: 'source-map',
};

const baseConfig = {
  resolve: { extensions: ['', '.webpack.js', '.web.js', '.ts', '.js'] },
  plugins: plugins,
  postcss: postcssInit,

  devServer: {
    historyApiFallback: { index: '/' },
    proxy: Object.assign({}, proxy(), { '/api/*': 'http://localhost:3000' }),
  },

  module: {
    exprContextCritical: false,    // TODO: remove this when this is handled https://github.com/AngularClass/angular2-webpack-starter/issues/993
    preLoaders: [
      loaders.tslint,
    ],
    loaders: [
      loaders.ts,
      loaders.html,
      loaders.css,
      { test: /\.jpg$/, loader: "file-loader" },
      loaders.svg,
      loaders.eot,
      loaders.woff,
      loaders.woff2,
      loaders.ttf,
      loaders.json,
    ],
    noParse: [/zone\.js\/dist\/.+/, /angular2\/bundles\/.+/],
  },
};

module.exports = Object.assign(
  {},
  process.env.NODE_ENV === 'production' ? prodConfig : devConfig,
  baseConfig
);
