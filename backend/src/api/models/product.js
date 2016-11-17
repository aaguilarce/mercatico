'use strict'

const mongoose         = require('mongoose'),
      Schema           = mongoose.Schema,
      Pricing          = require('./pricing'),
      Shipping         = require('./shipping'),
      AttributeProduct = require('./attributeProduct');

const productSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
	published_date: {
        type: Date,
        required: true
    },
	price: {
        type: String,
        required: true
    },
	categories: [{
        type: String,
        required: true
    }],
	state: {
        type: String,
        require: true
    },
	image_path: {
        type: String,
        required: true
    },
	quantity: {
        type: Number,
        required: true
    },
    attributesProduct: [{
        type: Schema.Types.ObjectId,
        ref: 'Attribute'
    }],
    pricing: {
        type: Schema.Types.ObjectId,
        ref: 'Pricing'
    },
    shipping: {
        type: Schema.Types.ObjectId,
        ref: 'Shipping'
    }
});

module.exports = mongoose.model('Product', productSchema);
