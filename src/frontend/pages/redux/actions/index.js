import { SERVICE_AVAILABLE, GET_STATISTICS, GET_DOCTORS, GET_REVIEWS, GET_BLOGS, TOGGLE_NAVBAR } from "./actionType";
import { fetchData } from "../../../../backend/fetchData";
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
export const getNavbar = (payload) => ({
    type: TOGGLE_NAVBAR,
    navbar: payload
})
export const fetchServices = () => {
    return async (dispatch) => {
        try {
            const res = await fetchData.getAllServices()
            if (!res.ok) new Error('service is not available')
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
            if (!res.ok) new Error('statistics are not found')
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
            if (!res.ok) new Error('Doctors not found')
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
            if (!res.ok) new Error('Reviews are not found')
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
            if (!res.ok) new Error('Blogs are not found')
            dispatch(getBlogs(res.data))
        } catch (err) {
            console.log(err);
        }
    }
}
export const fetchNavbar = () => {
    return (dispatch) => {
        dispatch(getNavbar(false))
    }
}

