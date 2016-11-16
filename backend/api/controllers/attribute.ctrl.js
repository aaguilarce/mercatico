const mongoose  = require('mongoose'),
      Attribute = mongoose.model('Attribute');

function getAllAttributes(req, res){
    Attribute.find({}, function(err, data) {
        if (err) {
            res.status(404).json({ 'message': 'Not Found' });
        }
        else {
            res.status(200).json(data);
        }
    });
}

function insertAttribute(req, res){
    if (!req.payload._id) {
        res.status(401).json({ 'message': 'UnauthorizedError: private data' });
    }
    else {
        let attr = new Attribute();
        attr.name = req.body.name;
        attr.description = req.body.description;

        Attribute.save({ attr }, function(err, data) {
            if (err) {
                res.status(404).json({ 'message': 'Not Found' });
            }
            else {
                res.status(200).res.json(data);
            }
        });
    }
}

function deleteAttribute(req, res) {
    if (!req.payload._id) {
        res.status(401).json({ 'message': 'UnauthorizedError: private data' });
    }
    else {
        Attribute.remove({ '_id': req.params._id }, function(err) {
            if (err) {
                res.status(404).json({ 'message': 'Not Found' });
            }
            else {
                res.status(200).json({ status: true, message: 'Attribute deleted successfully!' });
            }
        });
    }
}

function getAttribute(req, res) {
    if (!req.payload._id) {
        res.status(401).json({ 'message': 'UnauthorizedError: private data' });
    }
    else {
        Attribute.findById(req.params._id, function(err, data) {
            if (err) {
                res.status(404).json({ 'message': 'Not Found' });
            }
            else {
                res.status(200).json(data);
            }
        });
    }
}

function updateAttribute(req, res) {
    if (!req.payload._id) {
        res.status(401).json({ 'message': 'UnauthorizedError: private data' });
    }
    else {
        let attr = new Attribute();
        attr.name = req.body.name;
        attr.description = req.body.description;

        Attribute.findOneAndUpdate(req.params._id, attr, function(err, data) {
            if (err) {
                res.status(404).json({ 'message': 'Not Found' });
            }
            else {
                res.status(200).json(data);
            }
        });
    }
}

module.exports = { getAllAttributes, insertAttribute, deleteAttribute, getAttribute, updateAttribute };
