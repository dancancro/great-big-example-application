'use strict';

const express = require('express');
const winston = require('winston');
const helmet = require('helmet');
const nodeProxy = require('./node-proxy');
const nodeAppServer = require('./node-app-server');
const authPassport = require('./auth-passport');
const bodyParser = require('body-parser');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const fs = require('fs')
var path = require('path');
let users;

/**
 * Heroku-friendly production http server.
 *
 * Serves your app and allows you to proxy APIs if needed.
 */

const app = express();
const PORT = process.env.PORT || 8080; // set in package.json to 3000. I don't know why 8080 is here'


authPassport.readUsers()
  .then((_users) => {
    users = _users;
  })
  .catch((err) => {
    throw err;
  });

// Enable various security helpers.
app.use(helmet());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(
  (username, password, done) => {
    authPassport.authenticateUser(username, password, users)
      .then((authResult) => {
        return done(null, authResult);
      })
      .then(null, (message) => {
        return done(null, false, message);
      });
  }

));

passport.serializeUser((user, done) => {
  done(null, user.meta.id);
});

passport.deserializeUser((id, done) => {
  done(null, authPassport.getUserById(id, users));
});

// APIs


app.post('/api/auth/login',
  passport.authenticate('local'),
  (req, res) => {
    res.status(200).send(JSON.stringify(req.user));
  }
);

app.get('/api/claims', function (req, res) {
  res.sendFile(path.join(__dirname, '/db/claims.json'));
});
app.get('/api/rebuttals', function (req, res) {
  res.sendFile(path.join(__dirname, '/db/rebuttals.json'));
});
app.get('/api/claim-rebuttals', function (req, res) {
  res.sendFile(path.join(__dirname, '/db/claim-rebuttals.json'));
});
app.get('/api/contacts', function (req, res) {
  res.sendFile(path.join(__dirname, '/db/contacts.json'));
});
app.get('/api/crises', function (req, res) {
  res.sendFile(path.join(__dirname, '/db/crises.json'));
});
app.get('/api/heroes', function (req, res) {
  res.sendFile(path.join(__dirname, '/db/heroes.json'));
});
app.get('/api/notes', function (req, res) {
  res.sendFile(path.join(__dirname, '/db/notes.json'));
});
app.get('/api/users', function (req, res) {
  res.sendFile(path.join(__dirname, '/db/users.json'));
});

// all other routes are handled by Angular
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, '/../../dist/index.html'));
});

// API proxy logic: if you need to talk to a remote server from your client-side
// app you can proxy it though here by editing ./proxy-config.js
nodeProxy(app);

// Serve the distributed assets and allow HTML5 mode routing. NB: must be last.
nodeAppServer(app);

// Start up the server.
app.listen(PORT, (err) => {
  if (err) {
    winston.error(err);
    return;
  }

  winston.info(`Listening on port ${PORT}`);
});
