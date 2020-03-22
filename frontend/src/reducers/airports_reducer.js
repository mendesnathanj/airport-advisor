import { RECEIVE_AIRPORTS } from "../actions/airport_actions";

export default function(initialState = {}, action) {
  const nextState = Object.assign({}, initialState);

  switch (action.type) {
    case RECEIVE_AIRPORTS:
      return Object.assign({}, nextState, action.airports.data);
    case RECEIVE_AIRPORT:
      const airport = action.airport.data;
      return Object.assign({}, nextState, { [airport._id]: airport });
    default:
      return initialState;
  }
}
