const mongoose = require('mongoose'),
      User     = mongoose.model('User');

function getProfile(req, res) {
    if (!req.payload._id) {
        res.status(401).json({ 'message': 'UnauthorizedError: private data' });
    }
    else {
        User.findById(req.params._id, function(err, data) {
            if (err) {
                res.status(404).json({ 'message': 'Not Found' });
            }
            else {
                res.status(200).json(data);
            }
        });
    }
}

module.exports = { getProfile };

