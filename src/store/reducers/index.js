import { combineReducers } from "redux";
import authReducer from "./AuthReducer";
import alertReducer from "./AlertReducer";

const rootReducer = combineReducers({ authReducer, alertReducer });

export default rootReducer;
