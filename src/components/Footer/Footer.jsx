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

    useEffect(() => {
        checkRole()
    }, [user.user])

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
        <footer style={{ background: '#F1EADC', paddingTop: '92px', paddingBottom: '92px', marginTop: '20px' }} className="footer">
            <div style={{ display: 'grid', gridTemplateColumns: '2fr 4fr 1fr' }} className="footer__container">
                <div className="footer__col">
                    <div style={{ paddingBottom: '67px' }} className="footer__logo">GameAwesome</div>
                    <div className="footer__logo">
                        {isUser && <MainButton style={{ marginRight: '10px' }} onClick={exit}>Exit</MainButton>}
                        {isAdmin && <MainButton onClick={admin}>Admin</MainButton>}
                    </div>
                </div>
                <div style={{ display: 'flex', flex: '1 1 auto', justifyContent: 'center' }} className="footer__col">
                    <ul style={{ display: 'flex', gap: '30px' }} className="menu__list">
                        <li className="menu__item"><NavLink to={MAIN_ROUTE}>Main</NavLink></li>
                        <li className="menu__item"><NavLink to={SHOP_ROUTE}>Shop</NavLink></li>
                        <li className="menu__item"><NavLink to={ABOUT_ROUTE}>About brand</NavLink></li>
                        <li className="menu__item"><NavLink to={CONTACT_ROUTE}>Contact</NavLink></li>
                    </ul>
                </div>
                <div className="footer__col">
                    <div style={{ paddingBottom: '15px' }} className="footer__phone">+111111111</div>
                    <div className="footer__email">test@gmail.com</div>
                    <div className="footer__social">
                        <NavLink><img className="footer__social-item" src={instagram} /></NavLink>
                        <NavLink><img className="footer__social-item" src={facebook} /></NavLink>
                        <NavLink><img className="footer__social-item" src={twitter} /></NavLink>
                    </div>
                    <div className="footer__card">
                        <img src={visaMastercard} alt="" />
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default observer(Footer);