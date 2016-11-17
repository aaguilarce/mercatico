'use strict';

const mongoose = require('mongoose'),
      config   = require('./../config/index');

mongoose.connect(`mongodb://${config.host}/${config.dbName}`);

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Connection error: '));

db.once('open', () => {
    console.log(`Connected to the ${config.dbName} database`);
});
