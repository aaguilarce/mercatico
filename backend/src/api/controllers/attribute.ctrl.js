'use strict';

const mongoose  = require('mongoose'),
      Attribute = mongoose.model('Attribute');

module.exports.getAllAttributes = (req, res) => {
    Attribute.find({}, (err, data) => {
        if (err) {
            res.status(404).json({ 'message': 'Not Found' });
        }
        else {
            res.status(200).json(data);
        }
    });
}

module.exports.insertAttribute = (req, res) => {
    if (!req.payload._id) {
        res.status(401).json({ 'message': 'UnauthorizedError: private data' });
    }
    else {
        let attr = new Attribute();
        attr.name = req.body.name;
        attr.description = req.body.description;

        Attribute.save({ attr }, (err, data) => {
            if (err) {
                res.status(404).json({ 'message': 'Not Found' });
            }
            else {
                res.status(200).res.json(data);
            }
        });
    }
}

module.exports.deleteAttribute = (req, res) => {
    if (!req.payload._id) {
        res.status(401).json({ 'message': 'UnauthorizedError: private data' });
    }
    else {
        Attribute.remove({ '_id': req.params._id }, (err) => {
            if (err) {
                res.status(404).json({ 'message': 'Not Found' });
            }
            else {
                res.status(200).json({ status: true, message: 'Attribute deleted successfully!' });
            }
        });
    }
}

module.exports.getAttribute = (req, res) => {
    if (!req.payload._id) {
        res.status(401).json({ 'message': 'UnauthorizedError: private data' });
    }
    else {
        Attribute.findById(req.params._id, (err, data) => {
            if (err) {
                res.status(404).json({ 'message': 'Not Found' });
            }
            else {
                res.status(200).json(data);
            }
        });
    }
}

module.exports.updateAttribute = (req, res) => {
    if (!req.payload._id) {
        res.status(401).json({ 'message': 'UnauthorizedError: private data' });
    }
    else {
        let attr = new Attribute();
        attr.name = req.body.name;
        attr.description = req.body.description;

        Attribute.findOneAndUpdate(req.params._id, attr, (err, data) => {
            if (err) {
                res.status(404).json({ 'message': 'Not Found' });
            }
            else {
                res.status(200).json(data);
            }
        });
    }
}
