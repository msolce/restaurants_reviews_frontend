import axios from 'axios';

console.log(process.env)


export default axios.create({
    baseURL: process.env.REACT_APP_BASE_URL + '/api/v1',//process.env.BASE_URL,//'http://localhost:3001/api/v1', //http://localhost:3001
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
});