import { makeAutoObservable } from 'mobx';

export default class AuthorStore {
    constructor() {
        this._author = [
            { id: 1, name: 'Cd prodject' },
            { id: 2, name: 'Cd prodject' },
            { id: 3, name: 'Cd prodject' },
            { id: 4, name: 'Cd prodject' },
        ]

        makeAutoObservable(this)
    }

    setAuthor(author) {
        this._author = author;
    }

    get author() {
        return this._author;
    }

}