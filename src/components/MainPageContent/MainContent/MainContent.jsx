import React from 'react';
import './MainContent.scss';
import photoFirst from '../../../assets/main/mainphoto.jpg';
import photoTwo from '../../../assets/main/main2.jpg';
import photoThree from '../../../assets/main/main3.jpg';
import MainButton from '../../controls/Button/MainButton';
import { useNavigate } from 'react-router-dom';
import { SHOP_ROUTE } from '../../../utils/pages';
import Vector from '../../../assets/Vector.svg';

function MainContent() {
    const navigate = useNavigate()

    return (
        <section className="page__first">
            <div className="main__container page__first">
                <div className="page__first-content content">
                    <h2 className="content__title">New Arrivals in this season</h2>
                    <div className="content__block">
                        <p className="content__description">Refined combinations and velvet shades - that's what you've been looking for this season. Time to explore.</p>
                        <MainButton className="content__button-main" onClick={() => navigate(SHOP_ROUTE)}>Open Shop</MainButton>
                    </div>

                </div>
                <div className="page__first-photo photo">
                    <img style={{ width: '410px', height: '646px' }} src={photoFirst} alt="main photo" />
                    <div className="photo__other other-photo">
                        <img style={{ width: '197px', height: '197px' }} className="other-photo__img-2" src={photoTwo} alt="2 photo" />
                        <img style={{ width: '190px', height: '318px' }} className="other-photo__img-3" src={photoThree} alt="3 photo" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default MainContent;