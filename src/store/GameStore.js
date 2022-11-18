import { makeAutoObservable } from 'mobx';

export default class GameStore {
    constructor() {
        this._games = [
            { id: 1, name: 'Witcher', price: '200', img: '', typeId: '', brandId: '' },
            { id: 2, name: 'suka', price: '200', img: '', typeId: '', brandId: '' },
            { id: 3, name: 'Witcher21313', price: '200', prePrice: '100', img: '', typeId: '', brandId: '' },
            { id: 4, name: 'Witcher21313', price: '200', prePrice: '100', img: '', typeId: '', brandId: '' },
            { id: 5, name: 'Witcher21313', price: '200', prePrice: '100', img: '', typeId: '', brandId: '' },
            { id: 6, name: 'Witcher21313', price: '200', prePrice: '100', img: '', typeId: '', brandId: '' },
        ];
        this._page = 1;
        this._totalCount = 0;
        this._limit = 3;

        makeAutoObservable(this)
    }

    setGames(games) {
        this._games = games;
    }

    get games() {
        return this._games;
    }

    get page() {
        return this._page
    }

    get totalCount() {
        return this._totalCount
    }

    get limit() {
        return this._limit
    }
}