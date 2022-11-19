import React from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { Context } from '../..';
import MainButton from '../../components/controls/Button/MainButton';
import MainContent from '../../components/MainPageContent/MainContent/MainContent';
import ShopContent from '../../components/MainPageContent/ShopContent/ShopContent';
import GamesService from '../../services/games-service';

function MainPage() {

    const { games } = useContext(Context)

    useEffect(() => {
        const gamesCheck = async () => {
            let limit = 3;
            let page = 1;
            const { data } = await GamesService.fetchGames(null, null, limit, page)
            games.setGames(data.rows)
        }
        gamesCheck()

    }, [])

    return (
        <>
            <MainContent />
            <ShopContent />
        </>
    );
}

export default MainPage;