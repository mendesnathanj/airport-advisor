const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Airport = require("../../models/Airport");


router.get("/", (req, res) => {
    let result = {};
    Airport.find()
      .sort({ code: 1 })
      // .select({ 'name': 1, 'city': 1, 'country': 1, 'code': 1 })
      // .populate('reviews')
      // .populate({
      //   path: "reviews",
      //   model: "review",
      //   populate: {
      //     path: "user",
      //     model: "users",
      //     select: 'username'
      //   }
      // })
      .then(airports => {
        airports.forEach(airport => {
          let id = airport._id;
          result[id] = airport;
        });
        return result;
      })

      .then(result => res.json(result))
      .catch(err => res.json('error'));
});


router.get('/search', (req, res) => {
  const query = req.query.query.split(',');
  const result = {};

  Airport.find({ '_id': { $in: query }})
    .populate('reviews')
    .then(airports => {
      airports.forEach(airport => result[airport._id] = airport);
      return res.json(result);
    });
});


router.get("/:airport_id", (req, res) => {
    const errors = {};

    Airport
        .findById(req.params.airport_id)
        .populate({path: 'reviews', model: 'review',
                    populate: {
                      path: 'user', model: 'users', select: 'username'
                    }
                  })
        .then(airport => { res.json(airport) })
})

module.exports = router;

