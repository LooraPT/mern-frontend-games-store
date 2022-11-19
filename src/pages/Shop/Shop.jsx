import React from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { Context } from '../..';
import ShopPageContent from '../../components/ShopPageContent/ShopPageContent';
import GamesService from '../../services/games-service';

function Shop() {

    const { games } = useContext(Context)

    useEffect(() => {
        const gamesCheck = async () => {
            let limit = 50;
            let page = 1;
            const { data } = await GamesService.fetchGames(null, null, limit, page)
            games.setGames(data.rows)

        }
        gamesCheck()

    }, [])

    return (
        <>
            <ShopPageContent />
        </>
    );
}

export default Shop;