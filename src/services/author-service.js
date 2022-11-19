import { $api, $authApi } from "../api";


export default class AuthorService {
    static async getAllAuthor() {
        return $api.get(`${process.env.REACT_APP_SERVER_URL}/author`)
    }

    static async createAuthor(name) {
        return $authApi.post(`${process.env.REACT_APP_SERVER_URL}/author`, { name })
    }
}