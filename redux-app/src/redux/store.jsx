import { legacy_createStore, combineReducers } from "redux"
import countReducer from "./reducers/countReducer";
import colorReducer from "./reducers/colorReducer";

const allReducers = combineReducers({
    count: countReducer,
    color: colorReducer
})

const store = legacy_createStore(allReducers)


export default store;