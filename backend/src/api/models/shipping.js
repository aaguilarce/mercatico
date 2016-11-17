'use strict'

const mongoose = require('mongoose'),
      Schema   = mongoose.Schema;

const shippingSchema = new Schema({
    weight: {
        type: Number,
        required: true
    },
    width: {
        type: Number,
        required: true
    },
    height: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('Shipping', shippingSchema);
