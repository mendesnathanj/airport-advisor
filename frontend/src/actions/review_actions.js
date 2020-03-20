import * as APIUtil from '../utils/review_api_util';


export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';
export const DELETE_REVIEW = "DELETE_REVIEW";


const receiveReview = review => ({
  type: RECEIVE_REVIEW,
  review
});

const deleteReview = id => ({
  type: DELETE_REVIEW,
  id
});


export const createReview = review => dispatch =>
  APIUtil.createReview(review)
    .then(review => dispatch(receiveReview(review)))
    .catch(err => console.log(err))

export const updateReview = review => dispatch =>
  APIUtil.updateReview(review)
    .then(review => dispatch(receiveReview(review)))
    .catch(err => console.log(err))

// TODO:
// MAY HAVE TO REFACTOR DEPENDING ON HOW RESPONSE IS
// RECEIVED FROM BACKEND
export const deleteReview = id => dispatch =>
  APIUtil.deleteReview(id)
    .then(id => dispatch(deleteReview(id)))
    .catch(err => console.log(err))
