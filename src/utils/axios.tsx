import axios from 'axios';

export const axiosClient = axios.create({
  baseURL: 'https://api.green-api.com',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  validateStatus: (status) => {
    return status >= 200 && status <= 299;
  },
});