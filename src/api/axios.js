import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000/api', // Asigură-te că URL-ul este corect
});

export default axiosInstance;
