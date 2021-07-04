import { combineReducers } from "redux";
import repoReducer from "./repoReducer";
import userReducer from "./userReducer";

const reducers = combineReducers({
    repoReducer, userReducer
});

export default reducers;