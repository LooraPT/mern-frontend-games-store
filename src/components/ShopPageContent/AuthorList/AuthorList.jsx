import React from 'react';
import { useContext } from 'react';
import { Context } from '../../..';
import AuthorItem from './AuthorItem/AuthorItem';
import cl from './AuthorList.module.scss';

function AuthorList({ ...props }) {
    const { author } = useContext(Context);

    return (
        <div {...props} className={cl.authorList}>
            {author.author.map(aut =>
                <AuthorItem style={{ marginRight: '10px', marginBottom: '10px' }} key={aut.id}>{aut.name}</AuthorItem>
            )}
        </div>
    );
}

export default AuthorList;