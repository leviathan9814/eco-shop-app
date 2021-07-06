import * as axios from "axios";

const instance = axios.create({
    baseURL: "http://localhost:3001/",
    withCredentials: true,
});

export const shopAPI = {
    getCargo () {
        return instance.get(`cargo/`)
    },

    getAssortment () {
        return instance.get(`assortment/`)
    },

    getCargoDetails(itemId) {
        return instance.get(`cargo/${itemId}`)
    },

    getAssortmentDetails(itemId) {
        return instance.get(`assortment/${itemId}`)
    }
}