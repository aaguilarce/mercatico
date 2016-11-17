'use strict';

const express         = require('express'),
      router          = express.Router(),
      jwt             = require('express-jwt'),
      config          = require('./../../config/index'),
      attrProduct     = require('./../models/attributeProduct'),
      attrProductCtrl = require('./../controllers/attributeProduct.ctrl');

const auth = jwt({ secret: config.secret, userProperty: 'payload' });

router.post('/', auth, attrProductCtrl.insertAttributeProduct);
router.get('/', auth, attrProductCtrl.getAllAttributesProduct);
router.get('/:_id', auth, attrProductCtrl.getAttributeProduct);
router.delete('/:_id', auth, attrProductCtrl.deleteAttributeProduct);
router.put('/:_id', auth, attrProductCtrl.updateAttributeProduct);

module.exports = router;
