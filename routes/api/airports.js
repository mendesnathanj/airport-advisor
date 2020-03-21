const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Airport = require("../../models/Airport");


// router.get("/", (req, res) => {
//     let result = {};
//     Airport.find()
//       .sort({ code: 1 }) // sort by code alphabetically
//       .then(airports => {
//         airports.forEach(airport => {
  
//           let id = airport._id;
//           result[id] = airport;
//         });
//         return result;
//       })
//       .then(result => {
//         res.json(result);
//       })
//       .catch(err => res.status(400).json(err))
// });

router.get("/", (req, res) => {
  Airport
    .find()
    .then(airports => {res.json(airports)})
    .catch(err => res.status(400).json(err))
});

router.get("/:airport_id", (req, res) => {
    const errors = {};

    Airport
        // .findOne({_id: req.params.airport_id })
        .findById(req.params.airport_id)
        .populate('reviews')
        // .populate('reviews', 'review')
        .then(airport => { res.json(airport) })
})

module.exports = router;