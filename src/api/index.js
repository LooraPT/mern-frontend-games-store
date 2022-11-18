import axios from 'axios';

export const $authApi = axios.create({
    withCredentials: true,
    baseURL: process.env.REACT_APP_SERVER_URL
})

$authApi.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
    return config
})

$authApi.interceptors.response.use((config) => {
    return config;
}, async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && error.config && !error.config._isRetry) {
        originalRequest._isRetry = true;
        try {
            const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/user/refresh`, { withCredentials: true })
            localStorage.setItem('token', response.data.accessToken);
            return $api.request(originalRequest)
        } catch (e) {
            console.log(e.message)
        }
    }

    throw error;
})

export const $api = axios.create({
    withCredentials: true,
    baseURL: process.env.REACT_APP_SERVER_URL
})