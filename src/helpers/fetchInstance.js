import axios from 'axios';

const API_URL = 'https://api-ahmad-muhajir.cyclic.app'
const LOCAL_API_URL = 'http://localhost:3001'


const defaultOptions = {
    baseURL: process.env.NODE_ENV === 'production' ? API_URL : LOCAL_API_URL,
    method: 'get',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    },
    withCredentials: true
};

// Create instance
const fetchInstance = axios.create(defaultOptions);

export default fetchInstance;