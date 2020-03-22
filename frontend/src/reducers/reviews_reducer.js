import { RECEIVE_REVIEW, REMOVE_REVIEW } from '../actions/review_actions';


export default function(initialState = {}, action) {

  const nextState = Object.assign({}, initialState);


  switch(action.type) {
    case RECEIVE_REVIEW:
      const review = action.review.data;
      return Object.assign({}, nextState, { [review._id]: review });
    case REMOVE_REVIEW:
      return initialState;
    default:
      return initialState;
  }
};
