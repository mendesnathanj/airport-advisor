const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AirportSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },

    code: {
      type: String
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

    reviews: [
      {
        type: Schema.Types.ObjectId,
        ref: "review"
      }
    ]
  },

  {
    toObject: {
      virtuals: true
    },
    toJSON: {
      virtuals: true
    }
  }
);

AirportSchema.virtual('review_count').get(function() {
  return this.reviews.length;
})

// AirportSchema.virtual('avg_rating_transportation').get(function() {
//   let avg = 0;
//   this.reviews.ratings.forEach(rat => {
//     avg += rat.transportation;
//   })
//   return avg;
// })

const Airport = mongoose.model("airport", AirportSchema);
module.exports = Airport;
