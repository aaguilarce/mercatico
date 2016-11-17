'use strict'

const mongoose = require('mongoose'),
      Schema   = mongoose.Schema;

const pricingSchema = new Schema({
    list: {
        type: Number,
        required: true
    },
    retail: {
        type: Number,
        required: true
    },
    savings: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('Pricing', pricingSchema);
