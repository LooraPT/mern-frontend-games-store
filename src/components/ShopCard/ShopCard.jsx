import React from 'react';
import cl from './ShopCard.module.scss';
import vector from '../../assets/Vector.svg';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { ITEM_ROUTE } from '../../utils/pages';

function ShopCard({ gameD, ...props }) {
    const navigate = useNavigate()

    return (
        <div {...props} className={cl.shopCard}>
            <div onClick={() => navigate(ITEM_ROUTE + '/' + gameD._id)} className={cl.shopImg}>
                <NavLink><img className={cl.Img1} src={process.env.REACT_APP_SERVER_URL_2 + gameD.img} alt="game" /></NavLink>
                <NavLink><img className={cl.Img2} src={vector} alt="vector" /></NavLink>
            </div>
            <div className={cl.shopDescription}>
                <h4>{gameD.name}</h4>
                <h5>{'$' + gameD.price}</h5>
                {gameD.prePrice ? <s>{'$' + gameD.prePrice}</s> : ''}
            </div>
        </div>
    );
}

export default ShopCard;