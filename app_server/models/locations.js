var mongoose = require( 'mongoose' );

var locationSchema = new mongoose.Schema({
  name: String,
  address: String,
  rating: Number,
  facilities: [String],
  coords: {type: [Number], index: '2dsphere'}
 });
