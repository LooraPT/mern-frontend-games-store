import React from 'react';
import MainInput from '../../controls/Input/MainInput';
import MainButton from '../../controls/Button/MainButton';
import cl from './ModalCall.module.scss';
import { useState } from 'react';

function ModalCall({ visible, setVisible }) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [phone, setPhone] = useState('')

    const sentChange = () => {
        console.log(email, password, phone)
        setEmail('')
        setPassword('')
        setPhone('')
        setVisible(false)
    }

    const rootCl = [cl.modalCall]

    if (visible) {
        rootCl.push(cl.active);
    }

    return (
        <div className={rootCl.join(' ')} onClick={() => setVisible(false)}>
            <div className={cl.modalCall__content} onClick={(e) => e.stopPropagation()}>
                <div style={{ display: 'flex', justifyContent: 'center', paddingBottom: '15px', paddingTop: '20px' }}>Buy callback</div>
                <MainInput value={email} onChange={(e) => setEmail(e.target.value)} placeholder="name" />
                <MainInput value={password} onChange={(e) => setPassword(e.target.value)} placeholder="email" />
                <MainInput value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="phone" />
                <MainButton onClick={sentChange}>Order Call</MainButton>
            </div>
        </div>
    );
}

export default ModalCall;