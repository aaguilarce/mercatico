'use strict';

// Dependencies
const express      = require('express'),
      morgan       = require('morgan'),
      bodyParser   = require('body-parser'),
      mongoose     = require('mongoose'),
      cors         = require('cors'),
      cookieParser = require('cookie-parser'),
      passport     = require('passport'),
      cloudinary   = require('cloudinary'),
      routes       = require('./api/routes/index.route'),
      errors       = require('./helpers/errors'),
      config       = require('./config/index');

// Create an instance of express
const app = express();

// Set default port
app.set('port', config.port);

// Cloudinary
cloudinary.config({
    cloud_name: 'dhbixxdig',
    api_key: '618131245418221',
    api_secret: '0LlpIWAjurKF1WPIfB_abehXrX4'
});

// Cors (cross-server)
app.use(cors());

// Morgan
app.use(morgan('dev'));

// Body Parser
app.use(bodyParser.urlencoded({ extended: true }))
   .use(bodyParser.json());

// Connection to the database
require('./helpers/db');

// Initialise Passport before using the route middleware
app.use(passport.initialize());

// Passport
require('./helpers/passport');

// Set routes
app.use('/api', routes);

// Handle errors
app.use('/api', errors.unauthorizedError);
app.use('/api', errors.notFoundError);
app.use('/api', errors.internalServerError);

// Run server
app.listen(config.port, (err) => {
    console.log('Server listening on port ' + config.port);
});
