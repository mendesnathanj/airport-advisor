const db = require("../config/keys").mongoURI;
const mongoose = require("mongoose");
const faker = require('faker');
const axios = require('axios');
// import axios from 'axios';
const bcrypt = require('bcryptjs');

const jwt = require('jsonwebtoken');
const keys = require('../config/keys');

const User = require("../models/User");
const Review = require("../models/Review");
const Airport = require("../models/Airport");

mongoose
    .connect(db, { useNewUrlParser: true })
    .then(() => {
        console.log("Connected to MongoDB successfully")
    })
    .catch(err => console.log(err)); 


//// REMOVE PREVIOUS REVIEWS & USERS
// Review.remove({}, () => {
//     console.log("all reviews removed");
// });

// User.remove({}, () => {
//     console.log("all users removed");
// });


const genUser = () => {
    let genUsername = faker.name.findName();

    return User.findOne({ username: genUsername })
        .then(user => {
            if (user) {
                return genUser()
            } else {

                const newUser = new User({
                    username: genUsername,
                    password: "password"
                })

                bcrypt.genSalt(10, (err, salt) => {
                    bcrypt.hash(newUser.password, salt, (err, hash) => {
                        if (err) throw err;
                        newUser.password = hash;
                        
                    })
                })
                newUser.save()
                
            }
            
        })
        
        .catch(err => console.log({msg: "wrong"}))
}


function getToken(user) {
    const payload = { id: user.id, name: user.name };

    return jwt.sign(
        payload,
        keys.secretOrKey,
        { expiresIn: 3600 }
    )
};



// GENERATE MANY USERS

const genUsers = (numUsers) => {
    let i = 0;
    while (i < numUsers) {
        genUser();
        i++;
    }
}


// GENERATE REVIEWS PER USER FOR GIVEN AIRPORT

const genReviews = (currentUser, currentAirport) => { 

    let newReview = new Review({
        user: currentUser._id,
        airport: currentAirport._id,
        review: faker.lorem.paragraph(),
        ratings: {
            transportation: faker.random.number({ min: 1, max: 5 }),
            restaurants: faker.random.number({ min: 1, max: 5 }),
            waiting_hall: faker.random.number({ min: 1, max: 5 }),
            wifi_charging: faker.random.number({ min: 1, max: 5 }),
            sleepability: faker.random.number({ min: 1, max: 5 }),
            cleanliness: faker.random.number({ min: 1, max: 5 }),
            security: faker.random.number({ min: 1, max: 5 }),
            general_score: faker.random.number({ min: 1, max: 5 })
        }
    });

    console.log(newReview)
    newReview.save()
      .then(t => t.populate("user", "username").execPopulate())
      .then(savedReview => {
          currentAirport.reviews.push(savedReview);
          currentAirport.save()
        })
      .catch(err => res.status(400).json({ msg: "error is here" }));
       
}

const genUsersAndReviews = (currentAirport) => {
    User.find()
        .then(users => {
            users.forEach(user => {
                genReviews(user, currentAirport)
            
            })
        })
    }


// TIME TO EXECUTE

genUsers(5);

Airport.find()
        // .sort(({code: 1}))
        .then(airports => {
            airports.forEach(airport => {
                genUsersAndReviews(airport)
                // airport.save()
                airport.populate('reviews')
            })
            console.log("done")
        })




////// (failed) Picking a random user
// const pickRandomUser = () => {
    
//     User.count().exec(function (err, count) {
//         let randomUser;
//         random = Math.floor(Math.random() * count);
//         randomUser = User.findOne().skip(random).exec(function(err, user) {
//             console.log(user)
//         })
//     })
    
// }
// pickRandomUser()



