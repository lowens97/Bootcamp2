const mongoose = require('mongoose'),
      Schema = mongoose.Schema,
      Listing = require('./ListingSchema.js'),
      config = require('./config');
      mongoose.connect(config.db.uri);

var findLibraryWest = function() {

  Listing.find({
    name: 'Library West'
  }, (err, entity) => {
    if (err) 
	{
      throw err;
    }
    console.log(entity);
  });
};

var removeCable = function() {
 
  Listing.find({
    code: 'CABL'
  }, (err, entities) => {
    if (err) 
	{
      throw err;
    }
    for(let i = 0; i < entities.length; i++)
	{
      entities[i].remove((err) => {
        if (err) 
		{
          throw err;
        }
        console.log(entities[i]);
      });
    }
  });
};

var updatePhelpsLab = function() {

    Listing.findOne({ "name": "Phelps Laboratory" }, 'code name address coordinates', function (err, listing) {
    if (err)
	{		
		return handleError(err);
	}
	
    listing.address = "1953 Meusem Rd, Gainesville, FL 32603";
	
    listing.save(function(err) {
      if (err)
	  {		  
		  throw err;
	  }
	  console.log(listing)
      console.log('updated phelps lab');
    });
   });
};

var retrieveAllListings = function() {

  Listing.find({}, (err, file) => {
    if (err) {
      throw err;
    }
    for (let i = 0; i < file.length; i++)
	{
      console.log(file[i]);
    }
  });
};

findLibraryWest();
removeCable();
updatePhelpsLab();
retrieveAllListings();
