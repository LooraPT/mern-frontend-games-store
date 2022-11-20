import React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/esm/Button';
import ModalAuthor from '../../components/Modal/ModalAuthor';
import ModalDeleteGames from '../../components/Modal/ModalDeleteGames';
import ModalGames from '../../components/Modal/ModalGames';
import ModalGenre from '../../components/Modal/ModalGenre';
import ModalGiveRoles from '../../components/Modal/ModalGiveRoles';
import ModalARoles from '../../components/Modal/ModalRoles';

function Admin() {
    const [authorShow, setAuthorShow] = useState(false);
    const [genreShow, setGenreShow] = useState(false);
    const [gamesShow, setGamesShow] = useState(false);
    const [deleteGamesShow, setDeleteGamesShow] = useState(false);
    const [roleCreate, setRoleCreate] = useState(false);
    const [roleGive, setRoleGive] = useState(false);

    return (
        <div style={{ display: 'flex', paddingTop: '200px', paddingBottom: '500px', justifyContent: 'center', flexDirection: 'column' }}>
            <Button onClick={() => setGenreShow(true)} className="mt-2">Add Genre</Button>
            <Button onClick={() => setAuthorShow(true)} className="mt-2">Add Author</Button>
            <Button onClick={() => setGamesShow(true)} className="mt-2">Add Games</Button>
            <Button onClick={() => setDeleteGamesShow(true)} className="mt-2">Delete Games</Button>
            <Button onClick={() => setRoleCreate(true)} className="mt-2">Add Role</Button>
            <Button onClick={() => setRoleGive(true)} className="mt-2">Give Role</Button>
            <ModalGenre show={genreShow} onHide={() => setGenreShow(false)} />
            <ModalAuthor show={authorShow} onHide={() => setAuthorShow(false)} />
            <ModalGames show={gamesShow} onHide={() => setGamesShow(false)} />
            <ModalDeleteGames show={deleteGamesShow} onHide={() => setDeleteGamesShow(false)} />
            <ModalARoles show={roleCreate} onHide={() => setRoleCreate(false)} />
            <ModalGiveRoles show={roleGive} onHide={() => setRoleGive(false)} />
        </div>
    );
}

export default Admin;