const express = require('express');
const { fetchNews } = require('../utils/news');
const router = express.Router();

// Route to get news articles
router.get('/news', async (req, res) => {
    const { query } = req.query; // Get search query from request
    try {
        const articles = await fetchNews(query);
        res.json(articles);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch news' });
    }
});

module.exports = router;
