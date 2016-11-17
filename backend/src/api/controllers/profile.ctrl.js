'use strict';

const mongoose = require('mongoose'),
      User     = mongoose.model('User');

module.exports.getProfile = (req, res) => {
    if (!req.payload._id) {
        res.status(401).json({ 'message': 'UnauthorizedError: private data' });
    }
    else {
        User.findById(req.params._id, (err, data) => {
            if (err) {
                res.status(404).json({ 'message': 'Not Found' });
            }
            else {
                res.status(200).json(data);
            }
        });
    }
}
