import React from 'react';
import AboutPageDescription from '../../components/AboutPageDescription/AboutPageDescription';
import './Order.scss';

function Order() {
    return (
        <section className="order">
            <div className="order__container">
                <AboutPageDescription nameNow={'Order'} namePre={'Main'} />
            </div>
        </section>
    );
}

export default Order;