import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:5000/api', // Change to your server URL
  withCredentials: true
});

export default instance;
