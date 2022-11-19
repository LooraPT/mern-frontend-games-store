import { makeAutoObservable } from 'mobx';

export default class GameStore {
    constructor() {
        this._games = [];
        this._totalCount = 0;
        this._selectedGames = {}

        makeAutoObservable(this)
    }

    setGames(games) {
        this._games = games;
    }

    get games() {
        return this._games;
    }

    setSelectedGames(games) {
        this._selectedGames = games;
    }

    get selectedGames() {
        return this._selectedGames;
    }


    setTotalCount(count) {
        this._totalCount = count
    }

    get totalCount() {
        return this._totalCount
    }

}