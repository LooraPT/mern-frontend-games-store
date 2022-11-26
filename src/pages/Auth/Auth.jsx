import React from 'react';
import AuthForm from '../../components/Form/AuthForm/AuthForm';
import './Auth.scss';


function Auth() {
    return (
        <div style={{ height: window.innerHeight - 130 }} className="auth__container">
            <AuthForm />
        </div>
    );
}

export default Auth;