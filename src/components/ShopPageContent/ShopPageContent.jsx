import React from 'react';
import AboutPageDescription from '../AboutPageDescription/AboutPageDescription';
import ShopContent from '../MainPageContent/ShopContent/ShopContent';
import AuthorList from './AuthorList/AuthorList';
import cl from './ShopPageContent.module.scss';

function ShopPageContent() {
    return (
        <section className={cl.shopPage}>
            <div className="shop__container">
                <AboutPageDescription namePre={'Main'} nameNow={'Shop'} />
                <AuthorList style={{ marginBottom: '92px' }} />
                <p style={{ marginBottom: '30px' }}><span>You see 9 from 12 items</span></p>
                <ShopContent />
            </div>
        </section>
    );
}

export default ShopPageContent;