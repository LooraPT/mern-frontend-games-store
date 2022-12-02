import { observer } from 'mobx-react-lite';
import React from 'react';
import { useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Context } from '../..';
import AuthService from '../../services/auth-service';
import { ABOUT_ROUTE, ADMIN_ROUTE, CONTACT_ROUTE, MAIN_ROUTE, SHOP_ROUTE } from '../../utils/pages';
import MainButton from '../controls/Button/MainButton';
import './Footer.scss';
import instagram from '../../assets/icons/instagram.svg';
import facebook from '../../assets/icons/facebook.svg';
import twitter from '../../assets/icons/twitter.svg';
import visaMastercard from '../../assets/icons/visa-mastercard.svg';
import { useState } from 'react';
import { useEffect } from 'react';

function Footer(props) {
    const { user } = useContext(Context)
    const navigate = useNavigate()
    const [isAdmin, setIsAdmin] = useState(false)
    const [isUser, setIsUser] = useState(false)



    const checkRole = () => {
        if (user.user.roles) {
            user.user.roles.forEach(role => {
                if (role === 'ADMIN') {
                    setIsAdmin(true)
                }

                if (role === 'USER') {
                    setIsUser(true)
                }
            });
        }
    }

    useEffect(() => {
        checkRole()
    }, [user.user])


    const exit = async () => {
        await AuthService.logOut()
        user.setUser({})
        user.setIsAuth(false)
        setIsUser(false)
        setIsAdmin(false)
        localStorage.removeItem('token')
    }

    const admin = () => {
        user.user.roles.forEach(role => {
            if (role === 'ADMIN') {
                navigate(ADMIN_ROUTE)
            }
        });
    }

    return (
        <footer className="footer">
            <div className="footer__container">
                <div className="footer__col">
                    <div className="footer__logo">GameAwesome</div>
                    <div className="footer__logo">
                        {isUser && <MainButton style={{ marginRight: '10px' }} onClick={exit}>Exit</MainButton>}
                        {isAdmin && <MainButton onClick={admin}>Admin</MainButton>}
                    </div>
                </div>
                <div className="footer__col one__col">
                    <ul className="menu__list">
                        <li className="menu__item"><NavLink to={MAIN_ROUTE}>Main</NavLink></li>
                        <li className="menu__item"><NavLink to={SHOP_ROUTE}>Shop</NavLink></li>
                        <li className="menu__item"><NavLink to={ABOUT_ROUTE}>About brand</NavLink></li>
                        <li className="menu__item"><NavLink to={CONTACT_ROUTE}>Contact</NavLink></li>
                    </ul>
                </div>
                <div className="footer__col">
                    <div className="footer__phone">+111111111</div>
                    <div className="footer__email">test@gmail.com</div>
                    <div className="footer__social">
                        <NavLink><img className="footer__social-item" src={instagram} alt={'instagram'} /></NavLink>
                        <NavLink><img className="footer__social-item" src={facebook} alt={'facebook'} /></NavLink>
                        <NavLink><img className="footer__social-item" src={twitter} alt={'twitter'} /></NavLink>
                    </div>
                    <div className="footer__card">
                        <img src={visaMastercard} alt="Visa and Mastercard" />
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default observer(Footer);