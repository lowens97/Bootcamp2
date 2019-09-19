
var mongoose = require('mongoose'), 
    Schema = mongoose.Schema;


var listingSchema = new Schema({
	code: { type: String, required: true, unique: true},
	name: { type: String, required: true, unique: true},
	coordinates: 
	{ 
		latitude: {type: Number}, 
		longitude: {type: Number}
	},
	
	address: String}
	);


listingSchema.pre('save', function(next) {

  var currentDate = new Date();
  this.updated_at = currentDate;
  if (!this.created_at)
  {
    this.created_at = currentDate;
  }
  next();
});


var Listing = mongoose.model('Listing', listingSchema);

module.exports = Listing;
