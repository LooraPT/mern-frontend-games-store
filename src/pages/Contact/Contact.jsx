import React from 'react';
import { useState } from 'react';
import AboutPageDescription from '../../components/AboutPageDescription/AboutPageDescription';
import MainButton from '../../components/controls/Button/MainButton';
import MainInput from '../../components/controls/Input/MainInput';
import './Contact.scss';

function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');

    return (
        <section className="contact">
            <div className="contact__container">
                <AboutPageDescription nameNow={"Contact"} namePre={"Main"} />
                <div className="contact__about">
                    <div className="contact__about-item item-about">
                        <h5 className="item-about__title">Phone number</h5>
                        <h6 className="item-about__info">+380 11 111 11 11</h6>
                    </div>
                    <div className="contact__about-item item-about">
                        <h5 className="item-about__title">E-mail</h5>
                        <h6 className="item-about__info">email@gmail.com</h6>
                    </div>
                    <div className="contact__about-item item-about">
                        <h5 className="item-about__title">Address</h5>
                        <h6 className="item-about__info">somewhere</h6>
                    </div>
                </div>
                <div className="form__write">
                    <form className="form__write-us" action="">
                        <h3 className="title__write-us">Write to us</h3>
                        <MainInput value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
                        <MainInput value={email} onChange={(e) => setEmail(e.target.value)} placeholder="E-mail" />
                        <MainInput value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Phone number" />
                        <MainInput value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Message" />
                        <MainButton>Send</MainButton>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Contact;