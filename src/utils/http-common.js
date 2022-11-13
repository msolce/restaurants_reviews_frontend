import axios from 'axios';




export default axios.create({
    baseURL: `http://localhost:3001/api/v1` ,//process.env.BASE_URL,//'http://localhost:3001/api/v1', //http://localhost:3001
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
});