const mongoose         = require('mongoose'),
      AttributeProduct = mongoose.model('AttributeProduct');

function getAllAttributesProduct(req, res){
    AttributeProduct.find({}, function(err, data) {
        if (err) {
            res.status(404).json({ 'message': 'Not Found' });
        }
        else {
            res.status(200).json(data);
        }
    });
}

function insertAttributeProduct(req, res){
    if (!req.payload._id) {
        res.status(401).json({ 'message': 'UnauthorizedError: private data' });
    }
    else {
        let attrProduct = new AttributeProduct();
        attrProduct.value = req.body.value;
        attrProduct.attribute = req.body.attribute;

        AttributeProduct.save({ attrProduct }, function(err, data) {
            if (err) {
                res.status(404).json({ 'message': 'Not Found' });
            }
            else {
                res.status(200).json(data);
            }
        });
    }
}

function deleteAttributeProduct(req, res) {
    if (!req.payload._id) {
        res.status(401).json({ 'message': 'UnauthorizedError: private data' });
    }
    else {
        AttributeProduct.remove({ '_id': req.params._id }, function(err) {
            if (err) {
                res.status(404).json({ 'message': 'Not Found' });
            }
            else {
                res.status(200).json({ status: true, message: 'AttributeProduct deleted successfully!' });
            }
        });
    }
}

function getAttributeProduct(req, res) {
    if (!req.payload._id) {
        res.status(401).json({ 'message': 'UnauthorizedError: private data' });
    }
    else {
        AttributeProduct.findById(req.params._id, function(err, data) {
            if (err) {
                res.status(404).json({ 'message': 'Not Found' });
            }
            else {
                res.status(200).json(data);
            }
        });
    }
}

function updateAttributeProduct(req, res) {
    if (!req.payload._id) {
        res.status(401).json({ 'message': 'UnauthorizedError: private data' });
    }
    else {
        let attrProduct = new AttributeProduct();
        attrProduct.value = req.body.value;
        attrProduct.attribute = req.body.attribute;

        AttributeProduct.findOneAndUpdate(req.params._id, attrProduct, function(err, data) {
            if (err) {
                res.status(404).json({ 'message': 'Not Found' });
            }
            else {
                res.status(200).json(data);
            }
        });
    }
}

module.exports = { getAllAttributesProduct, insertAttributeProduct, deleteAttributeProduct, getAttributeProduct, updateAttributeProduct };
