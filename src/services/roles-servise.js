import { $authApi } from "../api";

export default class RolesService {
    static async createRole(role) {
        return $authApi.post(`${process.env.REACT_APP_SERVER_URL}/roles/create`, { role })
    }

    static async giveRole(email, role) {
        return $authApi.post(`${process.env.REACT_APP_SERVER_URL}/roles/give`, { email, role })
    }

    static async getAllRoles() {
        return $authApi.get(`${process.env.REACT_APP_SERVER_URL}/roles`)
    }
}