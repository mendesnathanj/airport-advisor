const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Airport = require("../../models/Airport");


router.get("/", (req, res) => {
    let result = {};
    Airport.find()
      .sort({ code: 1 }) // sort by code alphabetically
      .then(airports => {
        airports.forEach(airport => {
          let id = airport.id;
          result[id] = airport;
        });
        return result;
      })
      .then(result => {
        res.send(result);
      });
});

router.get("/:airport_id", (req, res) => {
    const errors = {};

    Airport
        .find({_id: req.params.airport_id })
        .then(airports => {
            if(airports.length !== 1) {
                errors.airports = "More than one airport assoc with id";
                return res.status(400).json(errors)
            } else {
                res.json(airports[0])
            }
        })
})

module.exports = router;