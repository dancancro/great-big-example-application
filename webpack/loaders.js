'use strict';

exports.tslint = {
  test: /\.ts$/,
  loader: 'tslint',
  exclude: /node_modules/,
};

exports.ts = {
  test: /\.ts$/,
  loader: 'awesome-typescript-loader',
  query: {
    useForkChecker: true,
    tsconfig: './tsconfig.json',
  },
  exclude: /node_modules/,
};

exports.istanbulInstrumenter = {
  test: /^(.(?!\.test))*\.ts$/,
  loader: 'istanbul-instrumenter-loader',
};

exports.html = {
  test: /\.html$/,
  loader: 'raw',
  exclude: /node_modules/,
};

exports.css = {
  test: /\.css$/,
  loader: 'to-string!css?-minimize!postcss',
  exclude: /node_modules/,
};

// Needed this since webpack was choking on json files within node_modules
exports.json = {
  test: /\.json$/,
  loader: 'json-loader',
};

exports.svg = makeFileLoader(/\.svg$/);
exports.eot = makeFileLoader(/\.eot$/);
exports.woff = makeFileLoader(/\.woff$/);
exports.woff2 = makeFileLoader(/\.woff2$/);
exports.ttf = makeFileLoader(/\.ttf$/);

function makeFileLoader(pattern) {
  return {
    test: pattern,
    loader: 'file',
    exclude: /node_modules/,
  };
}
