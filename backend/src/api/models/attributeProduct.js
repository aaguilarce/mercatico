'use strict'

const mongoose  = require('mongoose'),
      Schema    = mongoose.Schema,
      Attribute = require('./attribute');

const attributeProductSchema = new Schema({
    value: {
        type: String,
        required: true
    },
    attribute: {
        type: Schema.Types.ObjectId,
        ref: 'Attribute'
    }
});

module.exports = mongoose.model('AttributeProduct', attributeProductSchema);
