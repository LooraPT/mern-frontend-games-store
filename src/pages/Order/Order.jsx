import React, { useState } from 'react';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Context } from '../..';
import OrderService from '../../services/order-service'
import AboutPageDescription from '../../components/AboutPageDescription/AboutPageDescription';
import MainButton from '../../components/controls/Button/MainButton';
import AddressForm from '../../components/Form/AddressForm/AddressForm';
import CommentForm from '../../components/Form/CommentForm/CommentForm';
import UserForm from '../../components/Form/UserForm/UserForm';
import { SUCCESS_ORDER_ROUTE } from '../../utils/pages';
import './Order.scss';

function Order() {
    const { cart } = useContext(Context);
    const navigate = useNavigate();

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')

    const [country, setCountry] = useState('');
    const [city, setCity] = useState('');
    const [street, setStreet] = useState('');
    const [house, setHouse] = useState('');
    const [apartment, setApartment] = useState('');

    const [comments, setComments] = useState('')

    const sendInfo = async () => {
        const order = await OrderService.createOrder({ name, email, phone, country, city, street, house, apartment, comments })
        navigate(SUCCESS_ORDER_ROUTE)
    }

    return (
        <section className="order">
            <div className="order__container">
                <AboutPageDescription nameNow={'Order'} namePre={'Main'} />
                <div className="order__user user-info">
                    <div className="user-info__form">
                        <UserForm
                            name={name} setName={setName}
                            email={email} setEmail={setEmail}
                            phone={phone} setPhone={setPhone}
                            title="User data"
                        />
                        <AddressForm
                            country={country} setCountry={setCountry}
                            city={city} setCity={setCity}
                            street={street} setStreet={setStreet}
                            house={house} setHouse={setHouse}
                            apartment={apartment} setApartment={setApartment}
                        />
                        <CommentForm
                            comments={comments}
                            setComments={setComments}
                        />
                    </div>
                    <div className="user-info__description">
                        <h4 className="order__title mb-4">Your order</h4>
                        <div className="order__info-items info-item">
                            <div className="info-item__des mb-4">
                                <div className="info-item__name">Product</div>
                                <div className="info-item__price">Price</div>
                            </div>
                            {cart.cartItems.map(item =>
                                <div key={item._id} className="info-item__des mb-4">
                                    <div className="info-item__name">{item.name}</div>
                                    <div className="info-item__price">{item.price}$</div>
                                </div>
                            )}
                            <div className="info-item__des des-back mb-4">
                                <div className="info-item__name">Total</div>
                                <div className="info-item__price">{cart.total}$</div>
                            </div>
                            <MainButton onClick={sendInfo}>Make an order</MainButton>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Order;