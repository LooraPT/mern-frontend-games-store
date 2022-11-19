import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import AuthorService from '../../services/author-service';
import RolesService from '../../services/roles-servise';

function ModalARoles({ show, onHide }) {
    const [role, setRole] = useState('');


    const addRole = async () => {
        const { data } = await RolesService.createRole(role)
        setRole('')
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
                    Add role
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control value={role} onChange={(e) => setRole(e.target.value)} placeholder={'write name author'} />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={onHide}>Close</Button>
                <Button onClick={addRole}>Add role</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default ModalARoles;