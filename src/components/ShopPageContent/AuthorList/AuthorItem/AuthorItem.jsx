import React from 'react';
import cl from './AuthorItem.module.scss';

function AuthorItem({ author, children, ...props }) {
    return (
        <button {...props} className={cl.buttonAuthor}>{children}</button>
    );
}

export default AuthorItem;