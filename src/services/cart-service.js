import { $authApi } from "../api";

export default class CartService {
    static async getAllItemsCart() {
        return $authApi.get(`${process.env.REACT_APP_SERVER_URL}/cart`)
    }

    static async addItemInCart(itemId) {
        return $authApi.post(`${process.env.REACT_APP_SERVER_URL}/cart`, { itemId })
    }

    static async removeItemInCart(itemId) {
        return $authApi.delete(`${process.env.REACT_APP_SERVER_URL}/cart`, { data: { itemId } })
    }
}