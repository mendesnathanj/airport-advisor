import { RECEIVE_REVIEW, REMOVE_REVIEW } from '../actions/review_actions';
import { RECEIVE_AIRPORT } from '../actions/airport_actions';


export default function(initialState = {}, action) {

  const nextState = Object.assign({}, initialState);


  switch(action.type) {
    case RECEIVE_REVIEW:
      const review = action.review.data;
      return Object.assign({}, nextState, { [review._id]: review });
    case REMOVE_REVIEW:
      delete nextState[action.id.data._id];
      return nextState;
    case RECEIVE_AIRPORT:
      let nextReviews = {}

      action.airport.data.reviews.forEach(review => {
        nextReviews[review._id]=review;
      })
      return Object.assign({}, nextState, nextReviews)
    default:
      return initialState;
  }
};
