'use strict';

const express      = require('express'),
      router       = express.Router(),
      jwt          = require('express-jwt'),
      config       = require('./../../config/index'),
      category     = require('./../models/category'),
      categoryCtrl = require('./../controllers/category.ctrl');

const auth = jwt({ secret: config.secret, userProperty: 'payload' });

router.post('/', auth, categoryCtrl.insertCategory);
router.get('/', auth, categoryCtrl.getAllCategories);
router.get('/:_id', auth, categoryCtrl.getCategory);
router.delete('/:_id', auth, categoryCtrl.deleteCategory);
router.put('/:_id', auth, categoryCtrl.updateCategory);

module.exports = router;
