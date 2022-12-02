import React from 'react';
import ShopCard from '../../ShopCard/ShopCard';
import './ShopContent.scss'
import { useContext } from 'react';
import { Context } from '../../..';
import { observer } from 'mobx-react-lite';
import MainButton from '../../controls/Button/MainButton';
import { useLocation, useNavigate } from 'react-router-dom';
import { SHOP_ROUTE } from '../../../utils/pages';


function ShopContent(props) {
    const { games } = useContext(Context);
    const navigate = useNavigate();
    const location = useLocation()
    const isShop = location.pathname === SHOP_ROUTE

    return (
        <section className="games">
            <div className={!isShop ? "games__container games__item" : ''}>
                {!isShop
                    ? <div className="games__item-nav">
                        <h2 className="games__item-nav-title">New collection</h2>
                    </div>
                    :
                    ''}
                <div className="games__magazine">
                    {games.games.map(game =>
                        <ShopCard style={{ marginBottom: '20px' }} key={game._id} gameD={game} />
                    )}
                </div>
                {!isShop
                    ?
                    <MainButton
                        onClick={() => navigate(SHOP_ROUTE)}
                        style={{ position: 'relative', left: '50%', transform: 'translate(-50%, 0)', marginTop: '20px' }}
                    >
                        Open Shop
                    </MainButton>
                    :
                    ''
                }

            </div>
        </section>
    );
}

export default observer(ShopContent);