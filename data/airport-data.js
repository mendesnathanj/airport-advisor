const db = require("../config/keys").mongoURI;
const mongoose = require("mongoose");

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err)); 

// mongoose.airports.drop({});

const fs = require('fs');
const parse = require("csv-parse");
const Airport = require("../models/Airport")

Airport.remove({}, () => {
  console.log("all data removed");
});

const excludedCats = [
  "heliport",
  "closed",
  "seaplane_base",
  "small_airport",
  "medium_airport",
  "balloonport"
];

const considerInclude = ["small_airport", "medium_airport"]
let data = [];


fs.createReadStream("./airport-codes.csv")
    .pipe(parse({ delimiter: "," }))
    .on("data", r => {

        const coords = r[11].split(",");
        const lat = coords[0];
        const long = coords[1];

        if (!excludedCats.includes(r[1]) && r[2] !== "name" && r[9]) {
          const newAirport = new Airport({
            name: r[2],
            code: r[9],
            city: r[7],
            country: r[4],
            lat: lat,
            long: long
          });

          // newAirport.populate('reviews')
          
          data.push(newAirport);
          
          // newAirport.save()
        };

    })

    .on("end", () => {
      const testData = data.slice(0, 10);
      console.log(testData)
      testData.forEach(airport => {
        airport.save();
      });
      console.log("end");
    });



