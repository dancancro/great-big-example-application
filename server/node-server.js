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

app.get('/api/claims', getRecords('claim'));
app.get('/api/rebuttals', getRecords('rebuttal'));
app.get('/api/claim-rebuttals', getRecords('claim-rebuttal'));
app.get('/api/contacts', getRecords('contact'));
app.post('/api/contact', saveARecord('contact'));
app.get('/api/crises', getRecords('crisis'));
app.get('/api/heroes', getRecords('hero'));
app.get('/api/notes', getRecords('note'));
app.get('/api/users', getRecords('user'));
app.post('/api/note', saveARecord('note'));

function getRecords(table) {
  return function (req, res) {
    res.sendFile(path.join(__dirname, '/db/' + table + '.json'));
  }
}

function saveARecord(table) {
  return function (req, res) {
    let fileName = path.join(__dirname, '/db/' + table + '.json')
    let reqRecord = req.body;
    fs.readFile(fileName, (err, data) => {
      if (err) throw err;
      let dbRecords = JSON.parse(data);
      if (dbRecords.some(function (record) { return record.id === reqRecord.id })) {
        dbRecords = dbRecords.map(record => record.id === reqRecord.id ? reqRecord : record)
      } else {
        dbRecords.push(reqRecord);
      }
      fs.writeFile(fileName, JSON.stringify(dbRecords), (err) => {
        if (err) throw err;    // TODO: send the unchanged version back and revert the change
        console.log('It\'s saved!');
      });
      res.send(JSON.stringify(req.body));
    });
  }
}


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
