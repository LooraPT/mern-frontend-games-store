import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { Dropdown } from 'react-bootstrap';
import { useState } from 'react';
import GenreService from '../../services/genre-servise';
import { observer } from 'mobx-react-lite';
import { useContext } from 'react';
import { Context } from '../..';
import { useEffect } from 'react';
import AuthorService from '../../services/author-service';
import GamesService from '../../services/games-service';


function ModalGames({ show, onHide }) {
    const { games, author, genre } = useContext(Context);
    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);
    const [prePrice, setPrePrice] = useState(0);
    const [file, setFile] = useState(null);

    useEffect(() => {
        const fetchAll = async () => {
            const authorFetch = await AuthorService.getAllAuthor();
            const genreFetch = await GenreService.getAllGenre();
            author.setAuthor(authorFetch.data)
            genre.setGenre(genreFetch.data)
        }
        fetchAll()
    }, [])

    const addGames = () => {
        const formData = new FormData()
        formData.append('name', name)
        formData.append('price', `${price}`)
        formData.append('prePrice', `${prePrice}`)
        formData.append('img', file)
        formData.append('genreId', genre.selectedGenre._id)
        formData.append('authorId', author.selectedAuthor._id)
        console.log(formData)

        const createGames = async () => {
            const { data } = await GamesService.addGames(formData)
            console.log(data)
            onHide()
        }

        createGames()

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
                    <Dropdown>
                        <Dropdown.Toggle className="mb-3">Genre</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {genre.genre.map(genr =>
                                <Dropdown.Item key={genr._id} onClick={() => genre.setSelectedGenre(genr)}>{genr.name}</Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown>
                        <Dropdown.Toggle className="mb-3">Author</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {author.author.map(autho =>
                                <Dropdown.Item key={autho._id} onClick={() => author.setSelectedAuthor(autho)}>{autho.name}</Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Form.Control className="mb-3" value={name} onChange={(e) => setName(e.target.value)} placeholder={'write name games'} />
                    <Form.Control className="mb-3" value={price} type="number" onChange={(e) => setPrice(e.target.value)} placeholder={'write price'} />
                    <Form.Control className="mb-3" value={prePrice} type="number" onChange={(e) => setPrePrice(e.target.value)} placeholder={'write pre price if exist'} />
                    <Form.Control className="mb-3" type="file" onChange={(e) => setFile(e.target.files[0])} />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={onHide}>Close</Button>
                <Button onClick={addGames}>Add games</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default observer(ModalGames);