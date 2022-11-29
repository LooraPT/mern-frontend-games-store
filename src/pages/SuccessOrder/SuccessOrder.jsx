import React from 'react';
import './SuccessOrder.scss';
import AboutPageDescription from '../../components/AboutPageDescription/AboutPageDescription';
import MainButton from '../../components/controls/Button/MainButton';
import icon from '../../assets/success/success.png';
import { useNavigate } from 'react-router-dom';
import { MAIN_ROUTE } from '../../utils/pages';

function SuccessOrder() {
    const navigate = useNavigate();

    return (
        <section className="success">
            <div className="success__container">
                <AboutPageDescription nameNow={'Order success'} namePre={'Main'} />
                <div className="success__order order-success">
                    <div className="order-success__icon">
                        <img src={icon} />
                    </div>
                    <div className="order-success__text">
                        <h4>Order successfully completed</h4>
                        <h5>We will contact you shortly!</h5>
                    </div>
                    <MainButton onClick={() => navigate(MAIN_ROUTE)}>Main page</MainButton>
                </div>
            </div>
        </section>
    );
}

export default SuccessOrder;