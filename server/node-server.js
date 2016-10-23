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
let users;

/**
 * Heroku-friendly production http server.
 *
 * Serves your app and allows you to proxy APIs if needed.
 */

const app = express();
const PORT = process.env.PORT || 8080;

authPassport.readUsers()
  .then( (_users) => {
    users = _users;
  })
  .catch( (err) => {
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
    .then( (authResult) => {
      return done(null, authResult);
    })
    .then(null, (message) => {
      return done(null, false, message);
    });
  }

));

passport.serializeUser( (user, done) => {
  done(null, user.meta.id);
});

passport.deserializeUser( (id, done) => {
  done(null, authPassport.getUserById(id, users));
});

app.post('/api/auth/login',
  passport.authenticate('local'),
  (req, res) => {
    res.status(200).send(JSON.stringify(req.user));
  }
);



app.post('/api/list',
  (req, res) => {
//    console.log('body:\n' + JSON.stringify(req.body));
    console.log('orderings:\n' + JSON.stringify(req.body.orderings));
    console.log('edits:\n' + JSON.stringify(req.body.edits));
    fs.readFile('objections.json', {encoding: 'utf-8'}, function(err,data){
        if (!err){
          // response.writeHead(200, {'Content-Type': 'text/html'});
          // response.write(data);
          // response.end();
          // console.log('Data \n\n' + data)
          res.setHeader('Content-Type', 'application/json');
          res.status(200).send(data);
        } else {
          console.log(err);
        }
    });
  }
);

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
