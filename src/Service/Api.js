import axios from 'axios';

const Api = axios.create({
    baseURL: 'https://yt.idcoude.com.br'
    //baseURL: 'http://localhost:8000'
});

export default Api