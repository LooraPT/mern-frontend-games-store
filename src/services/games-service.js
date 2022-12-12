import { $api, $authApi } from "../api";


export default class GamesService {
    static async fetchGames(genreId, authorId, limit, page) {
        return $api.get('/games', { params: { genreId, authorId, limit, page } })
    }

    static async fetchOneGames(id) {
        return $api.get('/games/' + id)
    }

    static async addGames(games) {
        return $authApi.post('/games', games)
    }

    static async deleteGame(id) {
        return $authApi.delete(`/games/${id}`)
    }
}