import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';
import FilterMenu from './filterMenu/FilterMenu';
import EventCard from './eventCard/EventCard';

const useStyles = makeStyles({
    container: {
        padding: '16px 32px',
        height: '100%',
        overflow: 'auto',
    },
    mainContent: {
        display: 'flex',
    },
});

function Events() {
    const classes = useStyles();
    const [events, setEvents] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('http://localhost:3001/events');
            const data = await response.json();
            setEvents(data);
        };

        fetchData();
    }, [setEvents]);

    console.log(events);

    return (
        <div className={classes.container}>
            <Typography variant="h4">Upcoming Events</Typography>
            <div className={classes.mainContent}>
                <FilterMenu />
                <div className="w-5/6 px-8 flex flex-wrap justify-around overflow-auto">
                    {events.map(({ id, title, date }) => (
                        <EventCard key={id} title={title} date={date} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Events;
