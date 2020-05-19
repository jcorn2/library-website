import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Button from '@material-ui/core/Button';
import { 
    Formik, Form, Field, ErrorMessage, 
} from 'formik';

const useStyles = makeStyles({
    field: {
        display: 'flex',
        padding: '8px 0',
        width: '375px',
        justifyContent: 'space-between',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        padding: '8px 0',
    },
    inputs: {
        backgroundColor: '#eeeeee',
    },
    submitButton: {
        width: '110px',
        backgroundColor: 'lightblue',
    },
});

function LibraryCardForm() {
    const classes = useStyles();

    return (
        <Formik
            initialValues={{
                firstName: '',
                lastName: '',
                email: '',
                phoneNumber: '',
            }}
            validate={values => {
                const errors = {};
                if (!values.firstName) {
                    errors.firstName = 'Required'
                }
                if (!values.lastName) {
                    errors.lastName = 'Required'
                }
                if (!values.email) {
                    errors.email = 'Required'
                }
                if (!values.phoneNumber) {
                    errors.phoneNumber = 'Required'
                }

                return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                }, 400);
            }}
        >
            {({ isSubmitting }) => (
                <Form className={classes.form}>
                    <div className={classes.field}>
                        <label htmlFor="firstName">First Name:</label>
                        <Field type="text" name="firstName" id="firstName" className={classes.inputs} />
                        <ErrorMessage name="firstName" component="div" />
                    </div>
                    <div className={classes.field}>
                        <label htmlFor="lastName">Last Name:</label>
                        <Field type="text" name="lastName" id="lastName" className={classes.inputs} />
                        <ErrorMessage name="lastName" component="div" />
                    </div>
                    <div className={classes.field}>
                        <label htmlFor="email">Email:</label>
                        <Field type="email" name="email" id="email" className={classes.inputs} />
                        <ErrorMessage name="email" component="div" />
                    </div>
                    <div className={classes.field}>
                        <label htmlFor="phoneNumber">Phone Number:</label>
                        <Field type="text" name="phoneNumber" id="phoneNumber" className={classes.inputs} />
                        <ErrorMessage name="phoneNumber" component="div" />
                    </div>
                    <div className={classes.field}>
                        <label htmlFor="address">Address</label>
                        <Field type="text" name="address" id="address" className={classes.inputs} />
                        <ErrorMessage name="address" component="div" />
                    </div>
                    <Button type="submit" disabled={isSubmitting} className={classes.submitButton}>
                        Submit
                    </Button>
                </Form>
            )}
        </Formik>
    );
}

export default LibraryCardForm;
