import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { ABOUT_ROUTE, CONTACT_ROUTE, LOGIN_ROUTE, MAIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from '../../utils/pages';
import Logo from '../../assets/Logo.svg';
import { useContext } from 'react';
import { Context } from '../..';
import MainButton from '../controls/Button/MainButton';
import PhoneIcon from '../../assets/telephone.svg';
import "./Header.scss";
import CartIcon from '../../assets/cart.svg';
import { observer } from "mobx-react-lite";

function NavBarMain(props) {
    const { user } = useContext(Context)
    const navigate = useNavigate();

    return (
        <header className="header">
            <div className="header__container">
                <NavLink to={MAIN_ROUTE} className="header__logo">GameAwesome</NavLink>
                <div className="header__menu menu">
                    <nav className="menu__body">
                        <ul className="menu__list">
                            <li className="menu__item"><NavLink to={MAIN_ROUTE}>Main</NavLink></li>
                            <li className="menu__item"><NavLink to={SHOP_ROUTE}>Shop</NavLink></li>
                            <li className="menu__item"><NavLink to={ABOUT_ROUTE}>About brand</NavLink></li>
                            <li className="menu__item"><NavLink to={CONTACT_ROUTE}>Contact</NavLink></li>
                        </ul>
                    </nav>
                </div>
                <div className="header__button button">
                    {user.isAuth
                        ?
                        <div className="button__nav">
                            <div className="button__phone phone">
                                <img style={{ cursor: 'pointer' }} src={PhoneIcon} alt="phone__icon" />
                                <span>+380 111 111 11 11</span>
                            </div>
                            <img style={{ cursor: 'pointer' }} src={CartIcon} alt="cart" />
                        </div>
                        :
                        <div className="button__authorization">
                            <MainButton onClick={() => navigate(LOGIN_ROUTE)} style={{ padding: '10px 20px', marginRight: '10px' }}>Sign in</MainButton>
                            <MainButton onClick={() => navigate(REGISTRATION_ROUTE)} style={{ padding: '10px 20px' }}>Registration</MainButton>
                        </div>
                    }
                </div>
            </div>
        </header>
    );
}

export default observer(NavBarMain);