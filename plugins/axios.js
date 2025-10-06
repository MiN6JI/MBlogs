import axios from 'axios';
import Cookies from "js-cookie";

export default defineNuxtPlugin((nuxtApp) => {
    const config = useRuntimeConfig();

    const api = axios.create({
        baseURL: config.public.apiBase,
        withCredentials: true,
    });

    api.interceptors.request.use((request) => {
        const token = localStorage.getItem('auth_token')
        if (token) {
            request.headers.Authorization = `Bearer ${token}`
        }

        // Optional: if you use Sanctum
        const xsrf = Cookies.get('XSRF-TOKEN')
        if (xsrf) {
            request.headers['X-XSRF-TOKEN'] = xsrf
        }

        return request
    })

    // Handle errors globally
    api.interceptors.response.use(
        (response) => response,
        (error) => {
            if (error.response?.status === 401) {
                // Handle unauthorized access (token expired, etc.)
                localStorage.removeItem('auth_token')
            }
            return Promise.reject(error)
        }
    )

    nuxtApp.provide('axios', api);
});