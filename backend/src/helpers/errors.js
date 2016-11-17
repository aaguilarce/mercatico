'use strict';

// Error handling

// 401 error
module.exports.unauthorizedError = (err, req, res, next) => {
    res.status(401).json({ message: err.name + ': ' + err.message });
}

// 404 error
module.exports.notFoundError = (req, res, next) => {
    res.status(404).json({ message: 'Resource not found' });
}

// 500 errors
module.exports.internalServerError = (err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: err.name + ': ' + err.message});
}
