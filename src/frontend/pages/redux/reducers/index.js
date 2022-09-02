import { combineReducers } from "redux";
import serviceReducer from "./serviceReducer";

const rootReducer = combineReducers({
    serviceState: serviceReducer
})

export default rootReducer
