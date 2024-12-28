import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:8080/api'
});

// Add a request interceptor to add the token to all requests
api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default api;