import { makeAutoObservable } from "mobx";



export default class AboutStore {

    constructor() {
        this._aboutPosts = [];
        this._selectedPost = {};
        makeAutoObservable(this);
    }

    setAboutPosts(posts) {
        this._aboutPosts = posts;
    }

    get aboutPosts() {
        return this._aboutPosts;
    }

    setSelectedPost(post) {
        this._selectedPost = post;
    }

    get selectedPost() {
        return this._selectedPost;
    }
}