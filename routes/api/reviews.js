const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const Review = require('../../models/Review');
const Airport = require('../../models/Airport')
const validateReviewInput = require('../../validations/reviews');

router.get('/', (req, res) => {
    Review.find()
        .sort({ date: -1 })
        .then(reviews => res.json(reviews))
        .catch(err => res.status(404).json({ noreviewsfound: 'No reviews found' }));
});

router.get('/user/:user_id', (req, res) => {
    Review.find({ user: req.params.user_id })
        .sort({ date: -1 })
        .then(reviews => res.json(reviews))
        .catch(err =>
            res.status(404).json({ noreviewsfound: 'No reviews found from that user' }
            )
        );
});

router.get('/airport/:airport_id', (req, res) => {
    Review.find({ airport: req.params.airport_id })
        .sort({ date: -1 })
        .then(reviews => res.json(reviews))
        .catch(err =>
            res.status(404).json({ noreviewsfound: 'No reviews found from that airport' }
            )
        );
});

router.get('/:id', (req, res) => {
    Review.findById(req.params.id)
        .then(review => res.json(review))
        .catch(err =>
            res.status(404).json({ noreviewfound: 'No review found with that ID' })
        );
});

router.post('/',
    passport.authenticate('jwt', { session: false }),

    (req, res) => {
       
        const { errors, isValid } = validateReviewInput(req.body);
        
        if (!isValid) {
            return res.status(400).json(errors);
        }

        const newReview = new Review({
            user: req.user.id,
            airport: req.body.airport_id,
            review: req.body.review,
            // ratings: {
            //     transportation: req.body.ratings.transportation,
            //     restaurants: req.body.ratings.restaurants,
            //     waiting_hall: req.body.ratings.waiting_hall,
            //     wifi_charging: req.body.ratings.wifi_charging,
            //     sleepability: req.body.ratings.sleepability,
            //     cleanliness: req.body.ratings.cleanliness,
            //     security: req.body.ratings.security,
            //     general_score: req.body.ratings.general_score
            // }
        });

        // const newReview = new Review(req.body)
        // newReview.user = req.user.id

        newReview.save((err, newReview) => {
            
            // res.json(newReview);
        
            // Airport.findOne({id: newReview.airport})
            Airport.findById(req.body.airport_id)
                .then((airport) => {
                    if (airport) {
                        airport.reviews.push(newReview);
                        airport.save()
                        // .then(updatedAirport => {res.json(updatedAirport)})
                        res.json(newReview);
                        
                        // airport
                        //     .save()
                        //     .then(updatedAirport => res.json(updatedAirport))
                    } else (res.json({message: "no airport found"}))
                })
            
                .catch((err) => {
                    res.status(500).json({err})
                })
        })
      

            

    }
);

module.exports = router;

