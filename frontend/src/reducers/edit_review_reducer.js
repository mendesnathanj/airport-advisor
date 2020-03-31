import { OPEN_MODAL, CLOSE_MODAL } from '../actions/modal_actions';

export default function modalReducer(state = {}, action) {
  switch (action.type) {
    case OPEN_MODAL:
      if (action.review === undefined) return {};

      return action.review;
    case CLOSE_MODAL:
      return null;
    default:
      return state;
  }
}

