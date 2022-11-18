import React from 'react';
import cl from './MainInput.module.scss';

function MainInput(props) {
    return (
        <input className={cl.mainInput} {...props} />
    );
}

export default MainInput;