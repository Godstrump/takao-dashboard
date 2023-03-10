import axios from 'axios';

import { AUTH_TOKEN } from './constants';

const setAuthToken =  async (token: string) => {
    if (token) {
        // Apply to every request
        axios.defaults.headers.common['Authorization'] = 'Bearer';
        axios.defaults.headers.common['Accept'] = 'application/json';
        axios.defaults.headers.common['token'] = token;
        sessionStorage.setItem(AUTH_TOKEN, token);
    } else {
        // Delete auth header
        delete axios.defaults.headers.common['Authorization'];
        sessionStorage.removeItem(AUTH_TOKEN);
    }
};

export default setAuthToken;