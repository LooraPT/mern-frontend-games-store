import React from 'react';
import './ItemProduct.scss';
import MainButton from '../../components/controls/Button/MainButton';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import GamesService from '../../services/games-service';
import { observer } from 'mobx-react-lite';
import { useContext } from 'react';
import { Context } from '../..';
import ShopCard from '../../components/ShopCard/ShopCard';
import CartService from '../../services/cart-service';

function ItemProduct() {
    const { games, cart } = useContext(Context)
    const { id } = useParams()

    const fetchOne = async () => {
        const { data } = await GamesService.fetchOneGames(id)
        games.setSelectedGames(data)
    }

    const gamesCheck = async () => {
        let limit = 50;
        let page = 1;
        const { data } = await GamesService.fetchGames(null, null, limit, page)
        games.setGames(data.rows)

    }

    const addItemInCart = async () => {
        const { data } = await CartService.addItemInCart(id)

    }

    useEffect(() => {
        fetchOne()
        gamesCheck()
    }, [])

    const game = games.selectedGames
    const sameGames = games.games.filter(gam => game.authorId === gam.authorId)



    return (
        <section style={{ paddingTop: '189px', paddingBottom: '25px' }} className="item__page item">
            <div className="item__container">
                <div className="item__location">
                    <h1>{game.name}</h1>
                    <p>Main - <span>{game.name}</span></p>
                </div>
                <div className="item__info info">
                    <div className="info__img">
                        <img style={{ width: '350px', height: '480px' }} src={`${process.env.REACT_APP_SERVER_URL_2}/${game.img}`} />
                    </div>
                    <div className='info__about'>
                        <p className="info__about-price">{'$' + game.price}{game.prePrice ? <s>{'$' + game.prePrice}</s> : ''}</p>
                        <MainButton onClick={addItemInCart}>Add to cart</MainButton>
                    </div>
                </div>
                <div style={{ paddingTop: '70px' }} className="same__items">
                    <h2 className="same__items--title">similar products</h2>
                    <div style={{ flexWrap: 'wrap' }} className="same__games d-flex">
                        {sameGames.map(g =>
                            <ShopCard style={{ marginRight: '10px' }} key={g._id} gameD={g} />
                        )}
                    </div>

                </div>
            </div>
        </section >
    );
}

export default observer(ItemProduct);