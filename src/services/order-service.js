import { $authApi } from "../api";

export default class OrderService {
    static async createOrder(order) {
        return $authApi.post(`${process.env.REACT_APP_SERVER_URL}/order`, order)
    }

    static async getOrder() {
        return $authApi.get(`${process.env.REACT_APP_SERVER_URL}/order`)
    }
}