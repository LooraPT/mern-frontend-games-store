import { observer } from 'mobx-react-lite';
import React from 'react';
import { useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Context } from '../..';
import AuthService from '../../services/auth-service';
import { ABOUT_ROUTE, ADMIN_ROUTE, CONTACT_ROUTE, MAIN_ROUTE, SHOP_ROUTE } from '../../utils/pages';
import MainButton from '../controls/Button/MainButton';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Footer(props) {
    const { user } = useContext(Context)
    const navigate = useNavigate()

    const exit = async () => {
        await AuthService.logOut()
        user.setUser({})
        user.setIsAuth(false)
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
            <div style={{ display: 'flex' }} className="footer__container">
                <div className="footer__col">
                    <div style={{ paddingBottom: '67px' }} className="footer__logo">GameAwesome</div>
                    <div className="footer__logo">
                        <MainButton style={{ marginRight: '10px' }} onClick={exit}>Exit</MainButton>
                        <MainButton onClick={admin}>Admin</MainButton>
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
                    <div className="footer__phone">+111111111</div>
                    <div className="footer__email">test@gmail.com</div>
                    <div className="footer__social"></div>
                    <div className="footer__card"></div>
                </div>
            </div>
        </footer>
    );
}

export default observer(Footer);