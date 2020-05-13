import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    cardContent: {
        width: '33%',
        marginBottom: '16px',
        padding: '8px',
    },
});

function EventCard({ title, date, type}) {
    const classes = useStyles();

    return (
        <Card className={classes.cardContent}>
            <CardContent>
                <Typography variant="h5">{title}</Typography>
                <Typography>{(new Date(date)).toLocaleString()}</Typography>
                <Typography>{type}</Typography>
            </CardContent>
        </Card>
    );
}

EventCard.defaultProps = {
    type: 'Online Events',
};

EventCard.propTypes = {
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    type: PropTypes.string,
};

export default EventCard;
