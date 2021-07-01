import axios from 'axios'

let axiosInstance2 = axios.create({baseURL: 'https://reqres.in/api'});

const getUsers2 = () => {
    return axiosInstance2('/users/')
};
const getUser2 = (id) => {
    return axiosInstance2('/users/' + id)
};

export {getUsers2, getUser2};