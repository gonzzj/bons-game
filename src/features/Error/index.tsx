import React from 'react';
import Alert from '@material-ui/lab/Alert';
import AlertTitle from '@material-ui/lab/AlertTitle';
import { Container, Divider } from '@material-ui/core';
import useStyles from './theme';

const Error = ({ error } : any) => {
    const classes = useStyles();

	return (
        <Container maxWidth={'md'}>
            <div className={classes.root}>
                <Alert severity="error">
                    <AlertTitle>Error!</AlertTitle>
                    Something went <strong>wrong</strong> — contact the administrator!
                </Alert>
                <Divider className={classes.divider} />
                <p>{error.stack || (error.status + " " + error.message)}</p>
            </div>
        </Container>
	);
};

export default Error;
