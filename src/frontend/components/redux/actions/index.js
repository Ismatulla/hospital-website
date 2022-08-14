import { SERVICE_AVAILABLE, GET_STATISTICS } from "./actionType";
import { fetchData } from "../../../../backend/fetchData";
export const getService = (payload) => ({
    type: SERVICE_AVAILABLE,
    service: payload
})
export const getStatistics = (payload) => ({
    type: GET_STATISTICS,
    statistics: payload
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