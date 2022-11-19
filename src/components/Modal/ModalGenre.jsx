import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import GenreService from '../../services/genre-servise';


function ModalGenre({ show, onHide }) {
    const [valueGenre, setValueGenre] = useState('');

    const addAuthor = async () => {
        const { data } = await GenreService.createGenre(valueGenre)
        setValueGenre('')
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
                    Add genre
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control value={valueGenre} onChange={(e) => setValueGenre(e.target.value)} placeholder={'write name author'} />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={onHide}>Close</Button>
                <Button onClick={addAuthor}>Add author</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default ModalGenre;