const express      = require('express'),
      morgan       = require('morgan'),
      bodyParser   = require('body-parser'),
      mongoose     = require('mongoose'),
      cors         = require('cors'),
      cookieParser = require('cookie-parser'),
      passport     = require('passport'),
      cloudinary   = require('cloudinary'),
      routes       = require('./api/routes/index'),
      config       = require('./api/config/index'),
      helpers      = require('./api/helpers/index'),
      app          = express();

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
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Connect to Mongo when the app initializes
mongoose.connect(config.database, function(err) {
    if (err) console.log(err);
    console.log('Connection successful')
});

// Initialise Passport before using the route middleware
app.use(passport.initialize());

// Set routes
app.use('/', routes);

// Catch unauthorised errors
app.use(helpers.unauthorizedError);

// Passport
require('./api/config/passport');

// Run server
app.listen(config.port, function(err) {
    console.log('Example app listening on port ' + config.port);
});
