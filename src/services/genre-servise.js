import { $api, $authApi } from "../api";


export default class GenreService {
    static async getAllGenre() {
        return $api.get(`${process.env.REACT_APP_SERVER_URL}/genre`)
    }

    static async createGenre(name) {
        return $authApi.post(`${process.env.REACT_APP_SERVER_URL}/genre`, { name })
    }
}