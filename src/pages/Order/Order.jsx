import React, { useState } from 'react';
import AboutPageDescription from '../../components/AboutPageDescription/AboutPageDescription';
import MainButton from '../../components/controls/Button/MainButton';
import AddressForm from '../../components/Form/AddressForm/AddressForm';
import CommentForm from '../../components/Form/CommentForm/CommentForm';
import UserForm from '../../components/Form/UserForm/UserForm';
import './Order.scss';

function Order() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')

    const [country, setCountry] = useState('');
    const [city, setCity] = useState('');
    const [street, setStreet] = useState('');
    const [house, setHouse] = useState('');
    const [apartment, setApartment] = useState('');

    const [comments, setComments] = useState('')

    const sendInfo = () => {
        console.log(name, email, phone, country, comments)
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
                        <MainButton onClick={sendInfo}>send</MainButton>
                    </div>
                    <div className="user-info__sum">

                    </div>
                </div>
            </div>
        </section>
    );
}

export default Order;