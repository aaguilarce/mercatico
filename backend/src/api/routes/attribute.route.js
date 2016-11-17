'use strict';

const express  = require('express'),
      router   = express.Router(),
      jwt      = require('express-jwt'),
      config   = require('./../../config/index'),
      attr     = require('./../models/attribute'),
      attrCtrl = require('./../controllers/attribute.ctrl');

const auth = jwt({ secret: config.secret, userProperty: 'payload' });

router.post('/', auth, attrCtrl.insertAttribute);
router.get('/', auth, attrCtrl.getAllAttributes);
router.get('/:_id', auth, attrCtrl.getAttribute);
router.delete('/:_id', auth, attrCtrl.deleteAttribute);
router.put('/:_id', auth, attrCtrl.updateAttribute);

module.exports = router;
