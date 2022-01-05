import { Button, Table, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from "axios";

const url = 'https://61571c4b8f7ea600179850ae.mockapi.io/contact';

function Home() {

    const [user, setUser] = useState([]);
    const [search, setSearch] = useState('')

    const handleSearch = (e) => {
        setSearch(e.target.value)
    }

    const filtered = !search 
        ? user
        : user.filter((person) => 
            person.name.toLowerCase().includes(search.toLowerCase())
        );

    const getUser = async () => {
        try {
            const response = await axios.get(url);
            console.log(response.data);
            setUser(response.data);
        } catch (error) {
            console.error(error);
        }
    }
    
    const getMovie = async () => {
        try {
            const res = await axios.get('https://61981d74164fa60017c22f73.mockapi.io/contact')
            console.log(res.data)
            setUser(res.data)
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        getMovie()
    }, []);

    const Delete = async (id) => {
        await axios.delete(`https://61571c4b8f7ea600179850ae.mockapi.io/contact/${id}`)
        getUser();
    }

    return (
        <div>

            <Form.Control className='mt-2 mb-4' placeholder='Search User' type='text' value={search} onChange={handleSearch} />
            <div>
                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    {filtered.map((data, index) => (
                        <tbody key={data.id}>
                            <tr>
                                <th>{index + 1}</th>
                                <th>{data.name}</th>
                                <th>{data.email}</th>
                                <th>
                                    <Button variant="link" onClick={() => Delete(data.id)} style={{ color: 'red' }}>Delete</Button>
                                    <Link to={`/edit/${data.id}`}>Edit</Link>
                                </th>
                            </tr>
                        </tbody>
                    ))}
                </Table>
            </div>
        </div>
    )
}

export default Home;