'use strict';

const express           = require('express'),
      router            = express.Router(),
      jwt               = require('express-jwt'),
      attrRoutes        = require('./attribute.route'),
      attrProductRoutes = require('./attributeProduct.route'),
      authRoutes        = require('./authentication.route'),
      categoryRoutes    = require('./attribute.route'),
      profileRoutes     = require('./attribute.route');

router.use('/attributes', attrRoutes)
      .use('/attributesProduct', attrProductRoutes)
      .use('/auth', authRoutes)
      .use('/categories', categoryRoutes)
      .use('/profiles', profileRoutes);

module.exports = router;
