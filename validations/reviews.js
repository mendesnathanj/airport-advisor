const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateReviewInput(data) {
    let errors = {};

    data.review = validText(data.review) ? data.review : '';

    if (!Validator.isLength(data.review, { min: 6, max: 666 })) {
        errors.text = 'Reviews must be between 6 and 666 characters';
    }

    if (Validator.isEmpty(data.review)) {
        errors.text = 'Review field is required';
    }

    return {
        errors,
        isValid: Object.keys(errors).length === 0
    };
};