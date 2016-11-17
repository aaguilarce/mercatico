'use strict';

const mongoose         = require('mongoose'),
      AttributeProduct = mongoose.model('AttributeProduct');

module.exports.getAllAttributesProduct = (req, res) => {
    AttributeProduct.find({}, (err, data) => {
        if (err) {
            res.status(404).json({ 'message': 'Not Found' });
        }
        else {
            res.status(200).json(data);
        }
    });
}

module.exports.insertAttributeProduct = (req, res) => {
    if (!req.payload._id) {
        res.status(401).json({ 'message': 'UnauthorizedError: private data' });
    }
    else {
        let attrProduct = new AttributeProduct();
        attrProduct.value = req.body.value;
        attrProduct.attribute = req.body.attribute;

        AttributeProduct.save({ attrProduct }, (err, data) => {
            if (err) {
                res.status(404).json({ 'message': 'Not Found' });
            }
            else {
                res.status(200).json(data);
            }
        });
    }
}

module.exports.deleteAttributeProduct = (req, res) => {
    if (!req.payload._id) {
        res.status(401).json({ 'message': 'UnauthorizedError: private data' });
    }
    else {
        AttributeProduct.remove({ '_id': req.params._id }, (err) => {
            if (err) {
                res.status(404).json({ 'message': 'Not Found' });
            }
            else {
                res.status(200).json({ status: true, message: 'AttributeProduct deleted successfully!' });
            }
        });
    }
}

module.exports.getAttributeProduct = (req, res) => {
    if (!req.payload._id) {
        res.status(401).json({ 'message': 'UnauthorizedError: private data' });
    }
    else {
        AttributeProduct.findById(req.params._id, (err, data) => {
            if (err) {
                res.status(404).json({ 'message': 'Not Found' });
            }
            else {
                res.status(200).json(data);
            }
        });
    }
}

module.exports.updateAttributeProduct = (req, res) => {
    if (!req.payload._id) {
        res.status(401).json({ 'message': 'UnauthorizedError: private data' });
    }
    else {
        let attrProduct = new AttributeProduct();
        attrProduct.value = req.body.value;
        attrProduct.attribute = req.body.attribute;

        AttributeProduct.findOneAndUpdate(req.params._id, attrProduct, (err, data) => {
            if (err) {
                res.status(404).json({ 'message': 'Not Found' });
            }
            else {
                res.status(200).json(data);
            }
        });
    }
}
