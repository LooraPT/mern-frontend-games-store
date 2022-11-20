import { makeAutoObservable } from "mobx";


export default class RolesStore {
    constructor() {
        this._roles = []
        this._selectedRole = {}
        makeAutoObservable(this)
    }

    setRoles(roles) {
        this._roles = roles
    }

    get roles() {
        return this._roles
    }

    setSelectedRole(role) {
        this._selectedRole = role
    }

    get selectedRole() {
        return this._selectedRole
    }
}