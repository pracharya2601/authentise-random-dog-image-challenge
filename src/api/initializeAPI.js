
import axios from 'axios';

export const api = `https://dog.ceo/api/`;

export const initializeAPI = () => {
    return axios.defaults.baseURL = api;
}