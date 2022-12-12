import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import GenreService from '../../services/genre-servise';
import { useContext } from 'react';
import { Context } from '../..';
import { Dropdown } from 'react-bootstrap';
import { observer } from 'mobx-react-lite';
import GamesService from '../../services/games-service';
import { useEffect } from 'react';


function ModalDeleteGames({ show, onHide }) {
    const [game, setGame] = useState('');
    const { games } = useContext(Context)


    const deleteGame = async () => {
        const id = games.selectedGames._id
        const { data } = await GamesService.deleteGame(id);
        onHide()
    }

    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Delete game
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Dropdown>
                        <Dropdown.Toggle>games</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {games.games.map(game =>
                                <Dropdown.Item onClick={() => games.setSelectedGames(game)} key={game._id}>{game.name}</Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={onHide}>Close</Button>
                <Button onClick={deleteGame}>delete game</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default observer(ModalDeleteGames);