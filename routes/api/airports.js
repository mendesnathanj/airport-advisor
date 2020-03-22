const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Airport = require("../../models/Airport");


router.get("/", (req, res) => {
    let result = {};
    Airport.find()
      .sort({ code: 1 })
      .populate({
        path: "reviews",
        model: "review",
        populate: {
          path: "user",
          model: "users",
          select: 'username'
        }
      })
      .then(airports => {
        airports.forEach(airport => {
          let id = airport._id;
          result[id] = airport;
        });
        return result;
      })

      .then(result => res.json(result))
      .catch(err => res.status(400).json({ msg: "error is here" }));
});



router.get("/:airport_id", (req, res) => {
    const errors = {};

    Airport
        .findById(req.params.airport_id)
        // .populate('reviews')
        .populate({path: 'reviews', model: 'review',
                    populate: {
                      path: 'user', model: 'users', select: 'username'
                    }
                  })

        .then(airport => { res.json(airport) })
})

module.exports = router;

