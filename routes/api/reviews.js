const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');
const ObjectId = mongoose.Types.ObjectId;

const Review = require('../../models/Review');
const Airport = require('../../models/Airport');
const validateReviewInput = require('../../validations/reviews');

router.get('/', (req, res) => {
    Review.find()
        .sort({ date: -1 })
        .then(reviews => res.json(reviews))
        .catch(err => res.status(404).json({ noreviewsfound: 'No reviews found' }));
});

router.get('/:id', (req, res) => {
    Review.findById(req.params.id)
        .then(review => res.json(review))
        .catch(err =>
            res.status(404).json({ noreviewfound: 'No review found with that ID' })
        );
});

router.delete('/:id', (req, res) => {
    Review.findByIdAndDelete(req.params.id)
        .then(() => {
            res.json({ staus: "OK" })
        })
        .catch(err =>
            res.status(404).json({ noreviewfound: 'No review found with that ID' })
        );
});

router.patch('/:id', (req, res) => {
    Review.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then(node => res.json(node))
        .catch(err => res.status(404).json(err))
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

        // IMPORTANT
        // newReview.save((err, newReview) => {
            
        //     res.json(newReview);
        
        //     // Airport.findOne({id: newReview.airport})
        //     Airport.findById(req.body.airport_id)
        //         .then((airport) => {
        //             if (airport) {
        //                 airport.reviews.push(newReview);
        //                 airport.save();
        //                 // .then(updatedAirport => {res.json(updatedAirport)})
        //                 // res.json(newReview);
                        
        //                 // airport
        //                 //     .save()
        //                 //     .then(updatedAirport => res.json(updatedAirport))
        //             } else (res.json({message: "no airport found"}))
        //         })
            
        //         .catch((err) => {
        //             res.status(500).json({err})
        //         })
        // })

        newReview.save().then(review => res.json(review)).catch(err => {res.status(500).json(err)})
      

            

        // Airport.findById(req.body.airport_id)
        //     .then(airport => {
        //         const newReview = new Review({
        //             user: req.user.id,
        //             airport: req.body.airport_id,
        //             review: req.body.review,
        //             ratings: {
        //                 transportation: req.body.ratings.transportation,
        //                 restaurants: req.body.ratings.restaurants,
        //                 waiting_hall: req.body.ratings.waiting_hall,
        //                 wifi_charging: req.body.ratings.wifi_charging,
        //                 sleepability: req.body.ratings.sleepability,
        //                 cleanliness: req.body.ratings.cleanliness,
        //                 security: req.body.ratings.security,
        //                 general_score: req.body.ratings.general_score
        //             }
        //         });        
        //         newReview.save().then(review => res.json(review));
        //     })
    }
);

module.exports = router;

