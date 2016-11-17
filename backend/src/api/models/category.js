'use strict'

const mongoose = require('mongoose'),
      Schema   = mongoose.Schema;

const categorySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Category', categorySchema);
