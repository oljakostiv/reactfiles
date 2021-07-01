import axios from 'axios'

let axiosInstance = axios.create({baseURL: 'https://jsonplaceholder.typicode.com'});

const getUsers = () => {
    return axiosInstance('/users/')
};

const getPost = (id) => axiosInstance('/posts/' + id);
const getPostOfUsers = (id) => axiosInstance('/users/' + id + '/posts');

export {getUsers, getPost, getPostOfUsers};
