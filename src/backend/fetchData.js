import axios from "axios";
export class fetchData {
    static serverURL = 'http://localhost:5000'
    static getAllServices() {
        let dataURL = `${this.serverURL}/services`
        return axios.get(dataURL)
    }
    static getAllStatistics() {
        let dataURL = `${this.serverURL}/statistics`
        return axios.get(dataURL)
    }
    static getAllDoctors() {
        let dataURL = `${this.serverURL}/doctors`
        return axios.get(dataURL)
    }
    static getAllReviews() {
        let dataURL = `${this.serverURL}/reviews`
        return axios.get(dataURL)
    }
    static getAllBlogs() {
        let dataURL = `${this.serverURL}/blogs`
        return axios.get(dataURL)
    }
    static getSingleData(id) {
        let dataURL = `${this.serverURL}/reviews/${id}`
        return axios.get(dataURL)
    }
    static postReviews(reviewData) {
        let dataURL = `${this.serverURL}/reviews`
        return axios.post(dataURL, {
            id: reviewData.id,
            name: reviewData.name,
            opinion: reviewData.opinion,
            photo: reviewData.photo
        })
    }
    static putReviews(reviewData,id) {
        let dataURL = `${this.serverURL}/reviews/${id}`
        return axios.put(dataURL, {
            name: reviewData.name,
            opinion: reviewData.opinion,
            photo: reviewData.photo
        })
    }
}
