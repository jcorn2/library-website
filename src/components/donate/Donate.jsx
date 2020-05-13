import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';
import DonateForm from './donateForm/DonateForm';

const useStyles = makeStyles({
    container: {
        padding: '16px 32px',
        height: '100%',
        overflow: 'auto',
        textAlign: 'center',
    },
    donateBox: {
        width: '50%',
        margin: 'auto',
        padding: '16px',
        textAlign: 'start',
    },
});

function Dontate() {
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <Typography variant="h4">Donate Today!</Typography>
            <div className={classes.donateBox}>
                <Typography>
                    Gifts given to the Library Foundation make our 16 branches more welcoming, better equipped, more convenient and better places to learn and grow. Your contribution to the Library Foundation helps give teens a place to study after school, adults a place to use computers for job searches and young children a place to discover the skills needed to learn to read. Your support matters.    
                </Typography>
                <Typography>
                    Gifts may also be mailed to: AACPL Foundation, 5 Harry S. Truman Pkwy, Annapolis, MD 21401. Thank you!
                </Typography>
                <DonateForm />
            </div>
        </div>
    );
}

export default Dontate;
