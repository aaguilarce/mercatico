'use strict'

const mongoose = require('mongoose'),
      Schema   = mongoose.Schema,
      User     = require('./user'),
      Product  = require('./product');

const storeSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    products: [{
        type: Schema.Types.ObjectId,
        ref: 'Product'
    }]
});

module.exports = mongoose.model('Store', storeSchema);
