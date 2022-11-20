import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import RolesService from '../../services/roles-servise';
import { Dropdown } from 'react-bootstrap';
import { useEffect } from 'react';
import { useContext } from 'react';
import { Context } from '../..';

function ModalGiveRoles({ show, onHide }) {
    const { roles } = useContext(Context)
    const [email, setEmail] = useState('')

    const getRoles = async () => {
        const { data } = await RolesService.getAllRoles();
        roles.setRoles(data)
    }

    useEffect(() => {
        getRoles()

    }, [])


    const giveRole = async () => {
        const { data } = await RolesService.giveRole(email, roles.selectedRole.value)
        setEmail('')
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
                    Give role
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control value={email} onChange={(e) => setEmail(e.target.value)} placeholder={'write email person'} />
                    <Dropdown>
                        <Dropdown.Toggle className='mt-2'>Roles</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {roles.roles.map(role =>
                                <Dropdown.Item onClick={() => roles.setSelectedRole(role)} key={role._id}>{role.value}</Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={onHide}>Close</Button>
                <Button onClick={giveRole}>give role</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default ModalGiveRoles;