import axios from 'axios';

// Function to fetch news from backend API
export const fetchNews = async (query) => {
    try {
        const response = await axios.get(`http://localhost:5000/api/news`, {
            params: { query }, // Pass the search query as a URL parameter
        });
        return response.data; // Return the list of articles
    } catch (error) {
        console.error('Error fetching news:', error.message);
        throw error;
    }
};
