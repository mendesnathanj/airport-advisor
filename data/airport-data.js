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

let data = [];

fs.createReadStream(filepath)
  .on("error", () => {console.log("oops something went wrong")})
  .pipe(parser({ separator: "," }))
  .on("data", row => {
    if(row["iata_code"]) {data.push(row["iata_code"])}
    // const coords = r[11].split(",");
    // const lat = coords[0];
    // const long = coords[1];

    // if (!excludedCats.includes(r[1]) && r[2] !== "name" && r[9]) {
    //   const newAirport = new Airport({
    //     name: r[2],
    //     code: r[9],
    //     city: r[7],
    //     country: r[4],
    //     lat: lat,
    //     long: long
    //   });

    //   newAirport.save();
    // }
  })

  .on("end", () => {
    console.log("end");
    console.log(data)
  });


// fs.createReadStream("./airport-codes.csv")
//     .pipe(parse({ delimiter: "," }))
//     .on("data", r => {

//         const coords = r[11].split(",");
//         const lat = coords[0];
//         const long = coords[1];

//         if (!excludedCats.includes(r[1]) && r[2] !== "name" && r[9]) {
//           const newAirport = new Airport({
//             name: r[2],
//             code: r[9],
//             city: r[7],
//             country: r[4],
//             lat: lat,
//             long: long
//           });
          
//           newAirport.save()
//         };

//     })

//     .on("end", () => {
//       console.log("end");
//     });



