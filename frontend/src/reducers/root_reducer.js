import { combineReducers } from "redux";
import uiReducer from './ui_reducer';
import session from './session_api_reducer';
import errors from './errors_reducer';
import airports from './airports_reducer';
import reviews from './reviews_reducer';

const RootReducer = combineReducers({
    ui: uiReducer,
    session,
    errors,
    airports,
    reviews
});

export default RootReducer;
