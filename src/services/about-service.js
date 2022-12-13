import { $api, $authApi } from "../api";

export class AboutService {
    static async createAboutPost(body) {
        return $authApi.post(`${process.env.REACT_APP_SERVER_URL}/about`, body)
    }

    static async updateAboutPost(id, body) {
        return $authApi.put(`${process.env.REACT_APP_SERVER_URL}/about/${id}`, body)
    }

    static async deleteAboutPost(id) {
        return $authApi.delete(`${process.env.REACT_APP_SERVER_URL}/about/${id}`)
    }

    static async getAllAboutPost() {
        return $api.get(`${process.env.REACT_APP_SERVER_URL}/about`)
    }
}