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
}