'use strict';

const webpack = require('webpack');

const postcssBasePlugins = [
  require('postcss-import')({
    addDependencyTo: webpack,
  }),
  require('postcss-cssnext'),
];
const postcssDevPlugins = [];
const postcssProdPlugins = [
  require('cssnano')({
    safe: true,
    sourcemap: true,
    autoprefixer: false,
  }),
];

const postcssPlugins = postcssBasePlugins
  .concat(process.env.NODE_ENV === 'production' ? postcssProdPlugins : [])
  .concat(process.env.NODE_ENV === 'development' ? postcssDevPlugins : []);

module.exports = () => postcssPlugins;
