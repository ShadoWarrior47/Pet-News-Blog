import React, { useState, useEffect } from 'react';
import { fetchNews } from '../services/news';

const NewsList = ({ query }) => {
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const loadNews = async () => {
            try {
                setLoading(true);
                const data = await fetchNews(query);
                setNews(data);
                setLoading(false);
            } catch (error) {
                setError('Failed to fetch news');
                setLoading(false);
            }
        };

        loadNews();
    }, [query]); // Re-fetch if query changes

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div>
            <h1>Latest News</h1>
            <ul>
                {news.map((article, index) => (
                    <li key={index}>
                        <h2>{article.title}</h2>
                        <p>{article.summary}</p>
                        <a href={article.link} target="_blank" rel="noopener noreferrer">Read More</a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default NewsList;
