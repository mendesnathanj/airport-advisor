import { combineReducers } from "redux";
import uiReducer from './ui_reducer';

const RootReducer = combineReducers({
    ui: uiReducer
});

export default RootReducer;
