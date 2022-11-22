import axios from 'axios';

const instance = axios.create({
    //baseURL: 'https://burger2803.firebaseio.com/'
    baseURL: 'http://192.168.1.13:8080/'
});

export default instance;