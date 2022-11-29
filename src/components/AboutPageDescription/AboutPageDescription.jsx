import React from 'react';
import cl from './AboutPageDescription.module.scss';

function AboutPageDescription({ namePre, nameNow }) {
    return (
        <div className={cl.about}>
            <h1>{nameNow}</h1>
            <p>{namePre} - <span>{nameNow}</span></p>

        </div>
    );
}

export default AboutPageDescription;