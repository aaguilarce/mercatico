'use strict';

const express     = require('express'),
      router      = express.Router(),
      jwt         = require('express-jwt'),
      config      = require('./../../config/index'),
      user        = require('./../models/user'),
      profileCtrl = require('./../controllers/profile.ctrl');

const auth = jwt({ secret: config.secret, userProperty: 'payload' });

router.get('/', auth, profileCtrl.getProfile);

module.exports = router;
