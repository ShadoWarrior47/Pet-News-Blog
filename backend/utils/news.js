const axios = require('axios');

const NEWS_API_KEY = process.env.NEWSCATCHER_API_KEY; // Store in .env

// Function to fetch news based on a query (e.g., pets, sports, etc.)
const fetchNews = async (query) => {
    try {
        const response = await axios.get('https://api.newscatcherapi.com/v2/search', {
            params: { q: query, lang: 'en', page_size: 5 },
            headers: {
                'x-api-key': NEWS_API_KEY,
            },
        });
        return response.data.articles;
    } catch (error) {
        console.error('Error fetching news:', error.message);
        throw error;
    }
};

module.exports = { fetchNews };
