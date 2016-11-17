'use strict';

const express  = require('express'),
      router   = express.Router(),
      jwt      = require('express-jwt'),
      config   = require('./../../config/index'),
      user     = require('./../models/user'),
      authCtrl = require('./../controllers/authentication.ctrl');

const auth = jwt({ secret: config.secret, userProperty: 'payload' });

router.post('/register', authCtrl.register);
router.post('/login', authCtrl.login);
router.get('/', auth, authCtrl.getAllUsers);

module.exports = router;
