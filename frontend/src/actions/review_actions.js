import * as APIUtil from '../utils/review_api_util';


export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';
export const REMOVE_REVIEW = "REMOVE_REVIEW";


const receiveReview = review => ({
  type: RECEIVE_REVIEW,
  review
});

const removeReview = id => ({
  type: REMOVE_REVIEW,
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

export const deleteReview = id => dispatch =>
  APIUtil.deleteReview(id)
    .then(id => dispatch(removeReview(id)))
    .catch(err => console.log(err))
