import axios from 'axios'

export const api = axios.create({
    baseURL: "http://10.132.10.9:3000",
    timeout: 5000,
    headers: {'Content-Type': 'application/json'}
})
