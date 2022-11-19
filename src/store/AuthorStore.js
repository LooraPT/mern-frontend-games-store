import { makeAutoObservable } from 'mobx';

export default class AuthorStore {
    constructor() {
        this._author = []
        this._selectedAuthor = {}
        makeAutoObservable(this)
    }

    setAuthor(author) {
        this._author = author;
    }

    get author() {
        return this._author;
    }

    setSelectedAuthor(author) {
        this._selectedAuthor = author;
    }

    get selectedAuthor() {
        return this._selectedAuthor;
    }

}