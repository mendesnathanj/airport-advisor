const db = require("../config/keys").mongoURI;
const mongoose = require("mongoose");

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));


const fs = require('fs');
const parser = require("csv-parser");
const Airport = require("../models/Airport")
const filepath = "./airport-codes.csv";

Airport.remove({}, () => {
  console.log("all airports removed");
});

const excludedCats = [
  "heliport",
  "closed",
  "seaplane_base",
  "small_airport",
  "medium_airport",
  "balloonport"
];


fs.createReadStream(filepath)
  .on("error", err => console.log(err))
  .pipe(parser({ separator: "," }))
  .on("data", row => {
    // console.log(row);
    if (row["iata_code"] && !excludedCats.includes(row["type"])) {

      let coords = row["coordinates"].split(",")
      let lat = coords[0];
      let long = coords[1];

      let newAirport = new Airport({
        name: row["name"],
        code: row["iata_code"],
        city: row["municipality"] || "NA",
        country: row["iso_country"] || "NA",
        lat: lat || 0,
        long: long || 0
      });

      newAirport.save()
        .catch(err => { console.log(`oh no the airport didn't save ${newAirport.name}`) })
    }

  })
  .on("end", () => {
    console.log("end");
  });
