modole.export = function unauthorizedError (err, req, res, next) {
    if (err.name === 'UnauthorizedError') {
        res.status(401);
        res.json({ "message" : err.name + ": " + err.message });
    }
}
