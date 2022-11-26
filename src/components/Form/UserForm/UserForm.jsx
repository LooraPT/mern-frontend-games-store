import React from 'react';
import MainInput from '../../controls/Input/MainInput';
import './UserForm.scss';

function UserForm({ title, name, setName, email, setEmail, phone, setPhone }) {


    return (
        <div className="user__form-order">
            <h4>{title}</h4>
            <MainInput value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
            <MainInput value={email} onChange={(e) => setEmail(e.target.value)} placeholder="E-mail" />
            <MainInput value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Phone" />
        </div>
    );
}

export default UserForm;