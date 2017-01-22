'use strict';

const path = require('path');
const express = require('express');

/**
 * Installs routes that serve production-bundled client-side assets.
 * It is set up to allow for HTML5 mode routing (404 -> /dist/index.html).
 * This should be the last router in your express server's chain.
 */
module.exports = (app) => {
  const distPath = path.join(__dirname, '../dist');
  const indexFileName = 'index.html';
  app.use(express.static(distPath));

  console.log('__dirname: ' + __dirname)

  // this says "if node doesn't recognize the URL path, serve index.html"
  // this is what allows deep linking to application routes to work
  // it provides the same functionality as webpack-dev-server's 'apiHistoryFallback'
  app.get('*', (req, res) => res.sendFile(path.join(distPath, indexFileName)));
};
