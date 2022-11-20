import { makeAutoObservable } from "mobx"


export default class CartStore {

    constructor() {
        this._cartItems = []
        this._selectItems = {}
        this._total = 0
        makeAutoObservable(this)
    }

    setCartItems(items) {
        this._cartItems = items;
    }

    get cartItems() {
        return this._cartItems
    }

    setSelectedItems(item) {
        this._selectItems = item
    }

    get selectedItem() {
        return this._selectItems
    }

    setTotal(sum) {
        this._total = sum
    }

    get total() {
        return this._total
    }
}