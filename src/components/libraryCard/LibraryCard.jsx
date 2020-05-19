import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';
import LibraryCardForm from './libraryCardForm/LibraryCardForm';

const useStyles = makeStyles({
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '32px',
        height: '100%',
    },
    title: {
        marginBottom: '16px',
    },
});

function LibraryCard() {
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <Typography className={classes.title} variant="h4">Get a Library Card</Typography>
            <LibraryCardForm />
        </div>
    );
}

export default LibraryCard;
