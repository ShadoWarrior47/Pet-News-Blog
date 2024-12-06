import React, { useEffect, useState } from 'react';
import { getPetEvents } from '../services/events';

const EventList = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const data = await getPetEvents();
                setEvents(data);
            } catch (error) {
                console.error(error.message);
            }
        };
        fetchEvents();
    }, []);

    return (
        <div>
            <h1>Upcoming Pet Events</h1>
            <ul>
                {events.map((event) => (
                    <li key={event.id}>
                        <h2>{event.name.text}</h2>
                        <p>{event.description.text}</p>
                        <a href={event.url} target="_blank" rel="noreferrer">
                            More Info
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default EventList;
