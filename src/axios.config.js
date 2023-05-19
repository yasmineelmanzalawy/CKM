import axios from 'axios';
const instance = axios.create({
    baseURL: 'https://battaria.glowrank.com/',
    headers: {
        'Authorization': `Bearer ${localStorage.getItem("token")}`,
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Accept-Language': 'en',
        "Access-Control-Allow-Origin": "*",
           
    }
});

export default instance;