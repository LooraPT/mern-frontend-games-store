import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { Context } from '../../..';
import AuthService from '../../../services/auth-service';
import { LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from '../../../utils/pages';
import MainButton from '../../controls/Button/MainButton';
import MainInput from '../../controls/Input/MainInput';
import cl from './AuthForm.module.scss';

function AuthForm(props) {
    const { user } = useContext(Context);
    const navigate = useNavigate()
    const location = useLocation()
    const isSignIn = location.pathname === LOGIN_ROUTE
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [checkPassword, setCheckPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const login = async (e) => {
        e.preventDefault()
        setIsLoading(true)
        if (isSignIn) {
            try {
                const { data } = await AuthService.login(email, password)
                localStorage.setItem('token', data.accessToken)
                user.setIsAuth(true)
                user.setUser(data.user)
                navigate(SHOP_ROUTE)
            } catch (e) {
                alert(e.message)
            } finally {
                setIsLoading(false)
            }

        } else {
            if (password === checkPassword) {
                try {
                    const { data } = await AuthService.registration(email, password)
                    localStorage.setItem('token', data.accessToken)
                    user.setIsAuth(true)
                    user.setUser(data.user)
                    navigate(SHOP_ROUTE)
                } catch (e) {
                    alert(e.message)
                } finally {
                    setIsLoading(false)
                }
            }

        }

    }

    if (isLoading) {
        return (
            <div>Loading</div>
        )
    }

    return (
        <form className={cl.formAuth}>
            <h2>{isSignIn ? 'Sign in' : 'Registration'}</h2>
            <MainInput value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Write your email..." />
            <MainInput type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Write your password..." />
            {!isSignIn &&
                <MainInput type="password" value={checkPassword} onChange={(e) => setCheckPassword(e.target.value)} placeholder="Write your password again..." />
            }
            <div className="submit__form">
                <MainButton onClick={login}>{isSignIn ? 'Sign in' : 'Sign up'}</MainButton>
                <span>{isSignIn ? "Don't have an account?" : "Already have an account?"}
                    {isSignIn
                        ? <NavLink to={REGISTRATION_ROUTE}>Sign up</NavLink>
                        : <NavLink to={LOGIN_ROUTE}>Sign in</NavLink>
                    }
                </span>
            </div>

        </form>
    );
}

export default observer(AuthForm);