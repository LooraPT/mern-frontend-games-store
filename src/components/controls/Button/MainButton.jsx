import React from 'react';
import cl from './MainButton.module.scss'

function MainButton({ children, ...props }) {
    return (
        <button {...props} className={cl.mainButton}>{children}</button>
    );
}

export default MainButton;