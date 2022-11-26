import React from 'react';
import { useState } from 'react';
import MainInput from '../../controls/Input/MainInput';
import './AddressForm.scss';

function AddressForm({ country, setCountry, city, setCity, street, setStreet, house, setHouse, apartment, setApartment }) {

    return (
        <div className="user__form-order">
            <h4>Address user</h4>
            <MainInput value={country} onChange={(e) => setCountry(e.target.value)} placeholder="Country" />
            <MainInput value={city} onChange={(e) => setCity(e.target.value)} placeholder="City" />
            <MainInput value={street} onChange={(e) => setStreet(e.target.value)} placeholder="Street" />
            <MainInput value={house} onChange={(e) => setHouse(e.target.value)} placeholder="House" />
            <MainInput value={apartment} onChange={(e) => setApartment(e.target.value)} placeholder="Apartment" />
        </div>
    );
}

export default AddressForm;