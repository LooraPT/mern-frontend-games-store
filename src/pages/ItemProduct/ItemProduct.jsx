import React from 'react';
import './ItemProduct.scss';
import sweetsht from '../../assets/games/switshot.jpg'
import MainButton from '../../components/controls/Button/MainButton';

function ItemProduct() {
    const games = { id: 3, name: 'Witcher21313', price: '200', prePrice: '100', img: sweetsht, typeId: '', brandId: '' }

    return (
        <section style={{ paddingTop: '189px' }} className="item__page item">
            <div className="item__container">
                <div className="item__location">
                    <h1>{games.name}</h1>
                    <p>Main - <span>{games.name}</span></p>
                </div>
                <div className="item__info info">
                    <div className="info__img">
                        <img src={games.img} />
                    </div>
                    <div className='info__about'>
                        <p className="info__about-price">{'$' + games.price}{games.prePrice ? <s>{'$' + games.prePrice}</s> : ''}</p>
                        <MainButton>Add to cart</MainButton>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ItemProduct;