const db = require("../config/keys").mongoURI;
const mongoose = require("mongoose");
const faker = require("faker");
const axios = require("axios");
const User = require("../models/User");
const Review = require("../models/Review");
const Airport = require("../models/Airport");

// mongoose
//   .connect(db, { useNewUrlParser: true })
//   .then(() => {
//     console.log("Connected to MongoDB successfully");
//   })
//   .catch(err => console.log(err));

// REMOVE PREVIOUS REVIEWS & USERS
// Review.remove({}, () => {
//   console.log("all reviews removed");
// });

// User.remove({}, () => {
//   console.log("all users removed");
// });

// GENERATE ONE USER

const genUser = () => {
    axios.post("http://localhost:5000/api/users/signup", {
      username: faker.name.findName(),
      password: "password",
      password2: "password"}
    )
    .then(res => {console.log(res)})
    .catch(error => {
      console.error(error)
    })
}


genUser()