const mongoose = require('mongoose'),
      Category = mongoose.model('Category');

function getAllCategories(req, res) {
    Category.find({}, function(err, data) {
        if (err) {
            res.status(404).json({ 'message': 'Not Found' });
        }
        else {
            res.status(200).json(data);
        }
    });
}

function insertCategory(req, res) {
    if (!req.payload._id) {
        res.status(401).json({ 'message': 'UnauthorizedError: private data' });
    }
    else {
        let category = new Category();
        category.name = req.body.name;
        category.description = req.body.description;

        Category.save({ category }, function(err, data) {
            if (err) {
                res.status(404).json({ 'message': 'Not Found' });
            }
            else {
                res.status(200).json(data);
            }
        });
    }
}

function deleteCategory(req, res) {
    if (!req.payload._id) {
        res.status(401).json({ 'message': 'UnauthorizedError: private data' });
    }
    else {
        Category.remove({ '_id': req.params._id }, function(err) {
            if (err) {
                res.status(404).json({ 'message': 'Not Found' });
            }
            else {
                res.status(200).json({ status: true, message: 'Category deleted successfully!' });
            }
        });
    }
}

function getCategory(req, res) {
    if (!req.payload._id) {
        res.status(401).json({ 'message': 'UnauthorizedError: private data' });
    }
    else {
        Category.findById(req.params._id, function(err, data) {
            if (err) {
                res.status(404).json({ 'message': 'Not Found' });
            }
            else {
                res.status(200).json(data);
            }
        });
    }
}

function updateCategory(req, res) {
    if (!req.payload._id) {
        res.status(401).json({ 'message': 'UnauthorizedError: private data' });
    }
    else {
        let category = new Category();
        category.name = req.body.name;
        category.description = req.body.description;

        Category.findOneAndUpdate(req.params._id, category, function(err, data) {
            if (err) {
                res.status(404).json({ 'message': 'Not Found' });
            }
            else {
                res.status(200).json(data);
            }
        });
    }
}

module.exports = { getAllCategories, insertCategory, deleteCategory, getCategory, updateCategory };
