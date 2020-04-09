const db = require("../config/keys").mongoURI;
const mongoose = require("mongoose");
const User = require("../models/User");
const Review = require("../models/Review");
const Airport = require("../models/Airport");

const getReviews = () => {
    return [
        {
            user: null,
            airport: null,
            review: "Wow going to and from this airport was really easy! Transportation was so frictionless",
            ratings: {
                transportation: Math.floor(Math.random() * 5),
                restaurants: Math.floor(Math.random() * 5),
                waiting_hall: Math.floor(Math.random() * 5),
                wifi_charging: Math.floor(Math.random() * 5),
                sleepability: Math.floor(Math.random() * 5),
                cleanliness: Math.floor(Math.random() * 5),
                security: Math.floor(Math.random() * 5),
                general_score: Math.floor(Math.random() * 5),
            }
        },
        {
            user: null,
            airport: null,
            review: "The food around here was really good. Restaurants are A1",
            ratings: {
                transportation: Math.floor(Math.random() * 5),
                restaurants: Math.floor(Math.random() * 5),
                waiting_hall: Math.floor(Math.random() * 5),
                wifi_charging: Math.floor(Math.random() * 5),
                sleepability: Math.floor(Math.random() * 5),
                cleanliness: Math.floor(Math.random() * 5),
                security: Math.floor(Math.random() * 5),
                general_score: Math.floor(Math.random() * 5),
            }
        },
        {
            user: null,
            airport: null,
            review: "The waiting areas are pretty good. Lots of open space and leg room",
            ratings: {
                transportation: Math.floor(Math.random() * 5),
                restaurants: Math.floor(Math.random() * 5),
                waiting_hall: Math.floor(Math.random() * 5),
                wifi_charging: Math.floor(Math.random() * 5),
                sleepability: Math.floor(Math.random() * 5),
                cleanliness: Math.floor(Math.random() * 5),
                security: Math.floor(Math.random() * 5),
                general_score: Math.floor(Math.random() * 5),
            }
        },
        {
            user: null,
            airport: null,
            review: "Lots of charging ports around the waiting areas and wifi was really fast and easy to connect to.",
            ratings: {
                transportation: Math.floor(Math.random() * 5),
                restaurants: Math.floor(Math.random() * 5),
                waiting_hall: Math.floor(Math.random() * 5),
                wifi_charging: Math.floor(Math.random() * 5),
                sleepability: Math.floor(Math.random() * 5),
                cleanliness: Math.floor(Math.random() * 5),
                security: Math.floor(Math.random() * 5),
                general_score: Math.floor(Math.random() * 5),
            }
        },
        {
            user: null,
            airport: null,
            review: "If I got stuck here overnight I definitely wouldn't mind sleeping here if I had to!",
            ratings: {
                transportation: Math.floor(Math.random() * 5),
                restaurants: Math.floor(Math.random() * 5),
                waiting_hall: Math.floor(Math.random() * 5),
                wifi_charging: Math.floor(Math.random() * 5),
                sleepability: Math.floor(Math.random() * 5),
                cleanliness: Math.floor(Math.random() * 5),
                security: Math.floor(Math.random() * 5),
                general_score: Math.floor(Math.random() * 5),
            }
        },
        {
            user: null,
            airport: null,
            review: "Wow this airport was really clean! I would EAT OFF OF THE FLOOR JUST FOR FUN!",
            ratings: {
                transportation: Math.floor(Math.random() * 5),
                restaurants: Math.floor(Math.random() * 5),
                waiting_hall: Math.floor(Math.random() * 5),
                wifi_charging: Math.floor(Math.random() * 5),
                sleepability: Math.floor(Math.random() * 5),
                cleanliness: Math.floor(Math.random() * 5),
                security: Math.floor(Math.random() * 5),
                general_score: Math.floor(Math.random() * 5),
            }
        },
        {
            user: null,
            airport: null,
            review: "Security staff was so friendly! I had accidentally dropped my wallet without realizing back in check in and they were so quick at helping me get it back!",
            ratings: {
                transportation: Math.floor(Math.random() * 5),
                restaurants: Math.floor(Math.random() * 5),
                waiting_hall: Math.floor(Math.random() * 5),
                wifi_charging: Math.floor(Math.random() * 5),
                sleepability: Math.floor(Math.random() * 5),
                cleanliness: Math.floor(Math.random() * 5),
                security: Math.floor(Math.random() * 5),
                general_score: Math.floor(Math.random() * 5),
            }
        }, // END OF FIRST SECTION
        {
            user: null,
            airport: null,
            review: "I can't say transportation was the easiest thing to do here. Parking was a real pain the no no zone. On top of that $25 for valet?? My 1992 corolla did not need such treatment but it was the only way to get around. I digress. At least there were a lot of nice restaurants in the area to eat at.",
            ratings: {
                transportation: Math.floor(Math.random() * 5),
                restaurants: Math.floor(Math.random() * 5),
                waiting_hall: Math.floor(Math.random() * 5),
                wifi_charging: Math.floor(Math.random() * 5),
                sleepability: Math.floor(Math.random() * 5),
                cleanliness: Math.floor(Math.random() * 5),
                security: Math.floor(Math.random() * 5),
                general_score: Math.floor(Math.random() * 5),
            }
        },
        {
            user: null,
            airport: null,
            review: "The food around here was pretty meh. I would rather eat my boiled shoe tbh. The restaurant I went to wasn't very clean either. Cooks sneezing everywhere and wiping their mouths with their UNGLOVED hands",
            ratings: {
                transportation: Math.floor(Math.random() * 5),
                restaurants: Math.floor(Math.random() * 5),
                waiting_hall: Math.floor(Math.random() * 5),
                wifi_charging: Math.floor(Math.random() * 5),
                sleepability: Math.floor(Math.random() * 5),
                cleanliness: Math.floor(Math.random() * 5),
                security: Math.floor(Math.random() * 5),
                general_score: Math.floor(Math.random() * 5),
            }
        },
        {
            user: null,
            airport: null,
            review: "The waiting areas were pretty nice tbh. Lots of nice shopping areas and restaurants to eat at which was good. Everything was nice and clean as well",
            ratings: {
                transportation: Math.floor(Math.random() * 5),
                restaurants: Math.floor(Math.random() * 5),
                waiting_hall: Math.floor(Math.random() * 5),
                wifi_charging: Math.floor(Math.random() * 5),
                sleepability: Math.floor(Math.random() * 5),
                cleanliness: Math.floor(Math.random() * 5),
                security: Math.floor(Math.random() * 5),
                general_score: Math.floor(Math.random() * 5),
            }
        },
        {
            user: null,
            airport: null,
            review: "Lots of charging ports around the waiting areas and but the wifi for this place was soooooo slow. Honestly it's 2020 guys get it together. Besides that I wouldn't mind sleeping here and hanging out with some of these people I met",
            ratings: {
                transportation: Math.floor(Math.random() * 5),
                restaurants: Math.floor(Math.random() * 5),
                waiting_hall: Math.floor(Math.random() * 5),
                wifi_charging: Math.floor(Math.random() * 5),
                sleepability: Math.floor(Math.random() * 5),
                cleanliness: Math.floor(Math.random() * 5),
                security: Math.floor(Math.random() * 5),
                general_score: Math.floor(Math.random() * 5),
            }
        },
        {
            user: null,
            airport: null,
            review: "If I got stuck here overnight I definitely wouldn't mind sleeping here if I had to! Lots of places to charge your phone and grab a bite to eat if you want",
            ratings: {
                transportation: Math.floor(Math.random() * 5),
                restaurants: Math.floor(Math.random() * 5),
                waiting_hall: Math.floor(Math.random() * 5),
                wifi_charging: Math.floor(Math.random() * 5),
                sleepability: Math.floor(Math.random() * 5),
                cleanliness: Math.floor(Math.random() * 5),
                security: Math.floor(Math.random() * 5),
                general_score: Math.floor(Math.random() * 5),
            }
        },
        {
            user: null,
            airport: null,
            review: "A very easy airport to get around with! Parking was easy and valet was super cheap. And wow was this airport really clean! I would EAT OFF OF THE FLOOR JUST FOR FUN!",
            ratings: {
                transportation: Math.floor(Math.random() * 5),
                restaurants: Math.floor(Math.random() * 5),
                waiting_hall: Math.floor(Math.random() * 5),
                wifi_charging: Math.floor(Math.random() * 5),
                sleepability: Math.floor(Math.random() * 5),
                cleanliness: Math.floor(Math.random() * 5),
                security: Math.floor(Math.random() * 5),
                general_score: Math.floor(Math.random() * 5),
            }
        },
        {
            user: null,
            airport: null,
            review: "Security staff was so friendly! There was some crazy dude outside and suddenly 12 security guards tackled him down it was wild! Other than that bit of excitement everything else was cool. My favorite restaurant chain is here so that's great.",
            ratings: {
                transportation: Math.floor(Math.random() * 5),
                restaurants: Math.floor(Math.random() * 5),
                waiting_hall: Math.floor(Math.random() * 5),
                wifi_charging: Math.floor(Math.random() * 5),
                sleepability: Math.floor(Math.random() * 5),
                cleanliness: Math.floor(Math.random() * 5),
                security: Math.floor(Math.random() * 5),
                general_score: Math.floor(Math.random() * 5),
            }
        },
    ];
}


mongoose
    .connect(db, { useNewUrlParser: true })
    .then(() => {
        console.log("Connected to MongoDB successfully");

        // Airport.find({}, (err, airports) => {
        //     console.log('ERRRRR: ', err);
        //     console.log(airports);
        // });
        // Airport.find({}, '_id', (_, airports) => {
        //     airports = airports.map(airport => airport._id);

        //     User.find({}, '_id', (_, users) => {
        //         users = users.map(user => user._id);

        //         airports.forEach(airport => {
        //             const reviews = getReviews()
        //                 .map(review => {
        //                     const randUser = Math.floor(Math.random() * users.length);
        //                         review.user = users[randUser];
        //                         review.airport = airport;
        //                         return review;
        //                     })
        //                 .map(review_data => new Review(review_data));

        //             reviews.forEach((review) => {
        //               review.save().then(saved => {
        //                 Airport.findById(airport).then(port => {
        //                   port.reviews.push(saved);
        //                   port
        //                     .save()
        //                     .then(() => console.log(`saved successfully for airport ${port._id}`))
        //                     .catch((err) => console.log(err));
        //                 });
        //               });
        //             });
        //         });
        //     });
        // });
    })
    .catch(err => console.log(err));
