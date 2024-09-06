import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/',
});

export const getAllUsers = async () => {
    const { data } = await instance.get('/users');
    
    return data;
};


