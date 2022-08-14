import { SERVICE_AVAILABLE } from "../actions/actionType"
import { GET_STATISTICS } from "../actions/actionType"
let INITIAL_STATE = {
    service: [],
    statistics: []
}
const serviceReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SERVICE_AVAILABLE:
            return {
                ...state,
                service: action.service
            }
        case GET_STATISTICS:
            return {
                ...state,
                statistics: action.statistics
            }

        default:
            return state
    }

}
export default serviceReducer