import { RECEIVE_SEARCH_ITEMS } from "../actions/airport_actions";

export default function (initialState = {}, action) {
  const nextState = Object.assign({}, initialState);

  switch (action.type) {
    case RECEIVE_SEARCH_ITEMS:
      return Object.assign({}, nextState, action.airports.data);
    default:
      return initialState;
  }
}
