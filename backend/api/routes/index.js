const express    = require('express'),
      router     = express.Router(),
      jwt        = require('express-jwt'),
      controller = require('../controllers/index'),
      config     = require('../config/index');

var auth = jwt({
    secret: config.secret,
    userProperty: 'payload'
});

// Profile
router.get('/api/profile', auth, controller.profileCtrl.getProfile);

// Authentication
router.post('/api/register', controller.authCtrl.register);
router.post('/api/login', controller.authCtrl.login);
router.get('/api/users', controller.auth,authCtrl.getAllUsers);

// Book
router.post('/api/books', auth, controller.bookCtrl.insertBook);
router.get('/api/books', auth, controller.bookCtrl.getAllBooks);
router.get('/api/books/:_id', auth, controller.bookCtrl.getBook);
router.delete('/api/books/:_id', auth, controller.bookCtrl.deleteBook);
router.put('/api/books/:_id', auth, controller.bookCtrl.updateBook);

// Attribute
router.post('/api/attributes', auth, controller.attrCtrl.insertAttribute);
router.get('/api/attributes', auth, controller.attrCtrl.getAllAttributes);
router.get('/api/attributes/:_id', auth, controller.attrCtrl.getAttribute);
router.delete('/api/attributes/:_id', auth, controller.attrCtrl.deleteAttribute);
router.put('/api/attributes/:_id', auth, controller.attrCtrl.updateAttribute);

// Attributes Product
router.post('/api/attributesProduct', auth, controller.attrProductCtrl.insertAttributeProduct);
router.get('/api/attributesProduct', auth, controller.attrProductCtrl.getAllAttributesProduct);
router.get('/api/attributesProduct/:_id', auth, controller.attrProductCtrl.getAttributeProduct);
router.delete('/api/attributesProduct/:_id', auth, controller.attrProductCtrl.deleteAttributeProduct);
router.put('/api/attributesProduct/:_id', auth, controller.attrProductCtrl.updateAttributeProduct);

// Category
router.post('/api/categories', auth, controller.categoryCtrl.insertCategory);
router.get('/api/categories', auth, controller.categoryCtrl.getAllCategories);
router.get('/api/categories/:_id', auth, controller.categoryCtrl.getCategory);
router.delete('/api/categories/:_id', auth, controller.categoryCtrl.deleteCategory);
router.put('/api/categories/:_id', auth, controller.categoryCtrl.updateCategory);

module.exports = router;
