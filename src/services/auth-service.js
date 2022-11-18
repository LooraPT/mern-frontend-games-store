import { $api } from "../api";


export default class AuthService {
    static async registration(email, password) {
        return $api.post('/user/registration', { email, password })
    }

    static async login(email, password) {
        return $api.post('/user/login', { email, password })
    }

    static async logOut() {
        return $api.post('/user/logout')
    }
}