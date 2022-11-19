import React from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { Context } from '../../..';
import AuthorService from '../../../services/author-service';
import GenreService from '../../../services/genre-servise';
import AuthorItem from './AuthorItem/AuthorItem';
import cl from './AuthorList.module.scss';

function AuthorList({ ...props }) {
    const { author, genre } = useContext(Context);

    useEffect(() => {
        const getAuthor = async () => {
            const { data } = await AuthorService.getAllAuthor()
            author.setAuthor(data)
        }

        const getGenre = async () => {
            const { data } = await GenreService.getAllGenre()
            genre.setGenre(data)
        }
        getAuthor()
        getGenre()
    }, [])

    return (
        <div {...props} className={cl.authorList}>
            {author.author.map(aut =>
                <AuthorItem style={{ marginRight: '10px', marginBottom: '10px' }} key={aut._id}>{aut.name}</AuthorItem>
            )}
            <br style={{ padding: '20px 0px' }} />
            {genre.genre.map(gen =>
                <AuthorItem style={{ marginRight: '10px', marginBottom: '10px' }} key={gen._id}>{gen.name}</AuthorItem>
            )}
        </div>
    );
}

export default AuthorList;