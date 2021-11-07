// import axios from 'axios';
import axios from 'axios';
import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';

import getData from '../services/Api';

const url = 'https://61571c4b8f7ea600179850ae.mockapi.io/contact';

function Add() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const history = useHistory();

    const saveUser = async (e) => {
        e.preventDefault();
        await axios.post(url, {
            name,
            email
        });
        history.push('/');
    }

    return (
        <div>
            <Form onSubmit={saveUser}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control value={email} onChange={(e) => setEmail(e.target.value)} type="text" placeholder="Enter email" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div >
    )
}

export default Add;