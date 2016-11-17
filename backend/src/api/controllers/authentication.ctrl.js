'use strict';

const mongoose = require('mongoose'),
      User     = mongoose.model('User'),
      passport = require('passport');

module.exports.register = (req, res) => {
    let user = new User();

    user.name = req.body.name;
    user.email = req.body.email;
	user.type = req.body.type;
    user.setPassword(req.body.password);

    user.save((err) => {
        res.status(200).json({ 'token': user.generateJwt() });
    });
}

module.exports.login = (req, res) => {
	passport.authenticate('local', (err, user, info) => {
		if (err) res.status(404).json(err);

		if (user) {
			token = user.generateJwt();
			res.status(200).json({ 'token': user.generateJwt() });
		}
        else {
			res.status(401).json(info);
		}
  	})(req, res);
}

module.exports.getAllUsers = (req, res) => {
    if (!req.payload._id) {
        res.status(401).json({ 'message': 'UnauthorizedError: private data' });
    }
    else {
        User.find({}, '_id email name type', (err, data) => {
            if (err) res.status(404).json({ 'message': 'Not Found' });
            else {
                res.status(200).json(data);
            }
        });
    }
}
