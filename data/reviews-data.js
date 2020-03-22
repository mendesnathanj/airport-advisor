const db = require("../config/keys").mongoURI;
const mongoose = require("mongoose");
const faker = require('faker');
const fs = require("fs");
const split2 = require("split2");

mongoose
    .connect(db, { useNewUrlParser: true })
    .then(() => console.log("Connected to MongoDB successfully"))
    .catch(err => console.log(err)); 

// const stream = fs.fileReadStream("./yelp-review.js", buffer, sizeof(10));

// stream
//     .pipe(split2( JSON.parse, {maxLength: 1} ))
    // .on('data', (d) => {
        // console.log(d)
    // })
    // .on('readable', () => {
    //     let chunk;
    //     while ( chunk = stream.read(10) ) {
    //         console.log(chunk)
    //     }
    // })



// GENERATE USERS

const User = require("../models/User");
const Review = require("../models/Review");
const Airport = require("../models/Airport");
const numUsers = 10;

// const genUsers = (numUsers) => {
//     let i = 0;
//     while (i < numUsers ) {
//         let newUser = new User({
//             username: faker.name.findName(),
//             password: faker.random.word()
//         })

//         newUser.save().then(result => console.log(result));
//         i ++
//     }
// }

// genUsers(numUsers)


// GENERATE REVIEWS

// Review.remove({}, () => {
//     console.log("all data removed");
// });

console.log("begin")

const pickRandomUser = () => {
    let randomUser;
    User.count().exec(function (err, count) {
        let random = Math.floor(Math.random() * count);
        // return User.findOne().skip(random)
        User.findOne().skip(random).exec(
            function (err, result) {
                // return result;
                // console.log(result)
                randomUser = result;
            }
        )
    })
    return randomUser;
}

// pickRandomUser()
console.log(pickRandomUser())
// console.log(`here is the ${pickRandomUser()}`)

// let randomUser = null;
// let random = null;


// User.findOne().skip(random).exec(function(err, result){
//     // console.log(random)
//     let randomUser = result;
//     console.log(randomUser);
// })

// const review1 = new Review({
//   user: User.findOne(),
//   airport: Airport.findOne(),
//   review: faker.lorem.paragraph(),
//   ratings: {
//     transportation: faker.random.number({ min: 1, max: 5 }),
//     restaurants: faker.random.number({ min: 1, max: 5 }),
//     waiting_hall: faker.random.number({ min: 1, max: 5 }),
//     wifi_charging: faker.random.number({ min: 1, max: 5 }),
//     sleepability: faker.random.number({ min: 1, max: 5 }),
//     cleanliness: faker.random.number({ min: 1, max: 5 }),
//     security: faker.random.number({ min: 1, max: 5 }),
//     general_score: faker.random.number({ min: 1, max: 5 })
//   }
// });

// review1.save().then(result => console.log(result))