import { RECEIVE_AIRPORTS } from "../actions/airport_actions";

export default function(initialState = {}, action) {
  const nextState = Object.assign({}, initialState);

  switch (action.type) {
    case RECEIVE_AIRPORTS:
      return Object.assign({}, nextState, action.airports.data);
    default:
      return initialState;
  }
}
