import { combineReducers } from "redux";

import modal from "./modal_reducer";
import review from './edit_review_reducer';

const uiReducer = combineReducers({
  modal,
  review
});

export default uiReducer;
