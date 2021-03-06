const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const async = require("async");
const Review = require("./Review");

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
    ],

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


<<<<<<< HEAD
AirportSchema.virtual("review_count").get(function() {
  return this.reviews.length;
});

AirportSchema.virtual('avg_score').get(function() {
  let avg_scores = {
    transportation: 0,
    restaurants: 0,
    waiting_hall: 0,
    wifi_charging: 0,
    sleepability: 0,
    cleanliness: 0,
    security: 0,
    general_score: 0
  };

  if (this.review_count > 0) {
    this.reviews.forEach(review => {
      Object.keys(review.ratings).forEach(cat => {
        avg_scores[cat] += review.ratings[cat]
      });
    });
  }
  
  if (this.review_count > 0) {
    Object.keys(avg_scores).forEach(cat => {
      avg_scores[cat] /= this.review_count;
    });
  }
  

  return avg_scores;

})
=======
// AirportSchema.virtual("review_count").get(function() {
//   return this.reviews.length;
// });

// AirportSchema.virtual('avg_score').get(function() {
//   let avg_scores = {
//     transportation: 0,
//     restaurants: 0,
//     waiting_hall: 0,
//     wifi_charging: 0,
//     sleepability: 0,
//     cleanliness: 0,
//     security: 0,
//     general_score: 0
//   };

//   if (this.review_count > 0) {
//     this.reviews.forEach(review => {
//       Object.keys(review.ratings).forEach(cat => {
//         avg_scores[cat] += review.ratings[cat]
//       });
//     });
//   }


//   Object.keys(avg_scores).forEach(cat => {
//     avg_scores[cat] /= this.review_count;
//   });


//   return avg_scores;

// })
>>>>>>> master


// AirportSchema.statics.random = function(callback) {
//   this.count(
//     function(err, count) {
//       if (err) {
//         return callback(err);
//       }
//       const rand = Math.floor(Math.random() * count);
//       this.findOne()
//         .skip(rand)
//         .exec(callback);
//     }.bind(this)
//   );
// };

const Airport = mongoose.model("airport", AirportSchema);
module.exports = Airport;
