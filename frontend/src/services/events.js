import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000/api' });

export const getPetEvents = async () => {
    try {
        const response = await API.get('/events');
        return response.data;
    } catch (error) {
        console.error('Error fetching events:', error.message);
        throw error;
    }
};
