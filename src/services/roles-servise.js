import { $authApi } from "../api";

export default class RolesService {
    static createRole(role) {
        return $authApi.post(`${process.env.REACT_APP_SERVER_URL}/roles/create`, { role })
    }
}