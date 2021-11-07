import { Form, Button } from 'react-bootstrap';
import {useEffect, useState} from 'react';
import {useHistory, useParams} from 'react-router';
import axios from 'axios';

function Edit() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const history = useHistory();
    const {id} = useParams();
    const url = `https://61571c4b8f7ea600179850ae.mockapi.io/contact/${id}`;

    const editUser = async (e) => {
        e.preventDefault(e);
        await axios.put(url, {
            name,
            email
        })
        history.push('/');
    }

    const getUser = async () => {
        const response = await axios.get(url);
        setName(response.data.name);
        setEmail(response.data.email);
    }

    useEffect(() => {
        getUser()
    }, [])


    return (
            <div>
                <Form onSubmit={editUser}>
                    <Form.Group className="mb-3" controlId="Name">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="Email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="text" placeholder="input your Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </Form.Group>
                    <Button variant="danger" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
    )
}

export default Edit;