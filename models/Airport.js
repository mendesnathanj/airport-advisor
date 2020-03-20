const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AirportSchema = new Schema({
  name: {
    type: String,
    required: true
  },

  code: {
    type: String,
    // required: true
  },

  city: {
    type: String,
    required: true
  },

  country: {
    type: String,
    required: true
  },

  lat: {
    type: Number
  },

  long: {
    type: Number
  }, 

  reviews: {
    type: Schema.Types.ObjectId,
    ref: 'Review'
  }

});

const Airport = mongoose.model("airport", AirportSchema);
module.exports = Airport;
