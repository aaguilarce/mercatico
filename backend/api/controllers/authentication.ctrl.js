const mongoose = require('mongoose'),
      User     = mongoose.model('User'),
      passport = require('passport');

function register(req, res) {
    let user = new User();

    user.name = req.body.name;
    user.email = req.body.email;
	user.type = req.body.type;
    user.setPassword(req.body.password);

    user.save(function(err) {
        res.status(200).json({ 'token': user.generateJwt() });
    });
}

function login(req, res) {
	passport.authenticate('local', function(err, user, info) {
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

function getAllUsers(req, res) {
    if (!req.payload._id) {
        res.status(401).json({ 'message': 'UnauthorizedError: private data' });
    }
    else {
        User.find({}, '_id email name type', function(err, data) {
            if (err) res.status(404).json({ 'message': 'Not Found' });
            else {
                res.status(200).json(data);
            }
        });
    }
}

module.exports = { register, login, getAllUsers };
