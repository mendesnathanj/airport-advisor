// import { RECEIVE_REVIEW, REMOVE_REVIEW } from '../actions/review_actions';
import { RECEIVE_AIRPORT } from '../actions/airport_actions';
export default function (initialState = {}, action) {
    const nextState = Object.assign({}, initialState);
    switch (action.type) {
        case RECEIVE_AIRPORT:
            const airport = action.airport.data;
            return Object.assign({}, nextState, { [airport._id]: airport });
        default:
            return initialState;
    }
};