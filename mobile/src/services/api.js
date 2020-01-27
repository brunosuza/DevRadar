import axios from 'axios';

const api = axios.create({
    baseURL:  'http://192.168.15.179:3333',
});

export default api;