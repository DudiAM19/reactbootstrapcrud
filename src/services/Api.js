import axios from "axios";
const url = 'http://localhost:3002/contacts';

const getData = async() => {
    try {
        const response = await axios.get(url);
        console.log(response.data)
    } catch (error) {
        console.error(error);
    }
}

export default getData;