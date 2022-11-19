import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import AuthorService from '../../services/author-service';

function ModalAuthor({ show, onHide }) {
    const [valueAuthor, setValueAuthor] = useState('');


    const addAuthor = async () => {
        const { data } = await AuthorService.createAuthor(valueAuthor)
        setValueAuthor('')
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
                    Add author
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control value={valueAuthor} onChange={(e) => setValueAuthor(e.target.value)} placeholder={'write name author'} />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={onHide}>Close</Button>
                <Button onClick={addAuthor}>Add author</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default ModalAuthor;