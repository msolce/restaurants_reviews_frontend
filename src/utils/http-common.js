import axios from 'axios';

export default axios.create({
    baseURL: '/api/v1', //http://localhost:3001
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
});