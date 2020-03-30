import { RECEIVE_AIRPORTS, RECEIVE_AIRPORT } from "../actions/airport_actions";
import { RECEIVE_REVIEW } from '../actions/review_actions';

export default function(initialState = {}, action) {
  const nextState = Object.assign({}, initialState);

  switch (action.type) {
    case RECEIVE_AIRPORTS:
      return Object.assign({}, nextState, action.airports.data);
    case RECEIVE_AIRPORT:
      const airport = action.airport.data;
      return Object.assign({}, nextState, { [airport._id]: airport });
    case RECEIVE_REVIEW:
      const review = action.review.data;
      const port = nextState[review.airport];
      port.reviews.push(review);

      return Object.assign({}, nextState, { [port._id]: port });
    default:
      return initialState;
  }
}
