const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ReviewSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    airport_id: {
        type: Schema.Types.ObjectId,
        ref: 'airports'
    },
    review: {
        type: String,
        required: true
    },
    // ratings: {
    //     transportation: {
    //         type: Number,
    //     },
    //     restaurants: {
    //         type: Number,
    //     },
    //     waiting_hall: {
    //         type: Number,
    //     },
    //     wifi_charging: {
    //         type: Number,
    //     },
    //     sleepability: {
    //         type: Number,
    //     },
    //     cleanliness: {
    //         type: Number,
    //     },
    //     security: {
    //         type: Number,
    //     },
    //     general_score: {
    //         type: Number,
    //     }
    // },
    date: {
        type: Date,
        default: Date.now
    }
});
module.exports = Review = mongoose.model('review', ReviewSchema);