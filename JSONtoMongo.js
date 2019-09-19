'use strict';

var fs = require('fs'),
    mongoose = require('mongoose'), 
    Schema = mongoose.Schema, 
    Listing = require('./ListingSchema.js'), 
    config = require('./config');

mongoose.connect(config.db.uri);

fs.readFile('listings.json', (err, data) => {
  const file = JSON.parse(data).entries;
  var entry;
  for (let i = 0; i < file.length; i++) 
  {
    entry = new Listing(file[i])
      .save((err, listing) => {
        if(err) 
		{
          throw err;
        }
        if (i == file.length - 1) 
		{
          process.exit(0);
        }
    });
  }
});
