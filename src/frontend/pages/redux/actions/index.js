import {
    SERVICE_AVAILABLE,
    GET_STATISTICS,
    GET_DOCTORS,
    GET_REVIEWS,
    GET_BLOGS,
    DISPATCH_DATA,
} from "./actionType";
import {fetchData} from '../../../../backend/fetchData'
export const getService = (payload) => ({
    type: SERVICE_AVAILABLE,
    service: payload
})
export const getStatistics = (payload) => ({
    type: GET_STATISTICS,
    statistics: payload
})
export const getDoctors = (payload) => ({
    type: GET_DOCTORS,
    doctors: payload
})
export const getReviews = (payload) => ({
    type: GET_REVIEWS,
    reviews: payload
})
export const getBlogs = (payload) => ({
    type: GET_BLOGS,
    blogs: payload
})

// post request //

export const dispatchData = (payload) => ({
    type: DISPATCH_DATA,
    singleData: payload
})

export const fetchServices = () => {
    return async (dispatch) => {
        try {
            const res = await fetchData.getAllServices()
            dispatch(getService(res.data))
        } catch (err) {
            console.log(err);
        }
    }
}
export const fetchStatistics = () => {
    return async (dispatch) => {
        try {
            const res = await fetchData.getAllStatistics()
            dispatch(getStatistics(res.data))
        } catch (err) {
            console.log(err);
        }
    }
}
export const fetchAllDoctors = () => {
    return async (dispatch) => {
        try {
            const res = await fetchData.getAllDoctors()
            dispatch(getDoctors(res.data))
        } catch (err) {
            console.log(err);
        }
    }
}
export const fetchAllReviews = () => {
    return async (dispatch) => {
        try {
            const res = await fetchData.getAllReviews()
            dispatch(getReviews(res.data))
        } catch (err) {
            console.log(err);
        }
    }
}
export const fetchAllBlogs = () => {
    return async (dispatch) => {
        try {
            const res = await fetchData.getAllBlogs()
            dispatch(getBlogs(res.data))
        } catch (err) {
            console.log(err);
        }
    }
}

export const fetchSingleData = (id) => {
    return async (dispatch) => {
        try {
            const res = await fetchData.getSingleData(id)
            dispatch(dispatchData(res.data))
        } catch (err) {
            console.log(err);
        }
    }
}
// post request//

export const postAallReviews = (reviews) => {
    return async dispatch => {
        try {
            const res = await fetchData.postReviews(reviews)
            dispatch(dispatchData(res.data))
        } catch (err) {
            console.log(err);
        }
    }
}

// PUT REQUEST

export const putAllReviews = (reviews, id) => {
    return async dispatch => {
        try {
            const res = await fetchData.putReviews(reviews, id)
            dispatch(dispatchData(res.data))
        } catch (err) {
            console.log(err);
        }
    }
}

export const fetchDeleteRequest = (id) => {
    return async dispatch => {
        try {
            const res = await fetchData.deleteReviews(id)
            dispatch(dispatchData(res.data))
        } catch (err) {
            console.log(err)
        }
    }
}
