import * as axios from "axios";


export const shopAPI = {
    getCargo () {
        return axios.get(`cargo/`)
    },

    getAssortment () {
        return  axios.get(`assortment/`)
    },

    getCargoDetails(itemId) {
        return axios.get(`cargo/${itemId}`)
    },

    getAssortmentDetails(itemId) {
        return axios.get(`assortment/${itemId}`)
    }
}