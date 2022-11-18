import { makeAutoObservable } from 'mobx';

export default class GenreStore {
    constructor() {
        this._genre = []

        makeAutoObservable(this)
    }

    setGenre(genre) {
        this._genre = genre;
    }

    get genre() {
        return this._genre;
    }

}