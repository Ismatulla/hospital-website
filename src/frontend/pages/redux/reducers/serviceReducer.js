import {
    SERVICE_AVAILABLE,
    GET_STATISTICS,
    GET_DOCTORS,
    GET_REVIEWS,
    GET_BLOGS,
    TOGGLE_NAVBAR
} from "../actions/actionType"

let INITIAL_STATE = {
    service: [],
    statistics: [],
    doctors: [],
    reviews: [],
    blogs: [],
    navbar:false
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
        case GET_DOCTORS:
            return {
                ...state,
                doctors: action.doctors
            }
        case GET_REVIEWS:
            return {
                ...state,
                reviews: action.reviews
            }
        case GET_BLOGS:
            return {
                ...state,
                blogs: action.blogs
            }
            case TOGGLE_NAVBAR:
                return {
                    ...state,
                    navbar:action.navbar
                }
        default:
            return state
    }
}

export default serviceReducer
