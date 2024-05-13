import { combineReducers } from "redux";
import gameReducer  from "./gameReducer";
import characterReducer from "./characterReducer";

export const rootReducer = combineReducers({
    gameReducer,
    characterReducer
});